import React from 'react';

const Form = React.createClass({
  propTypes: {
    families: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    allSeasons: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    onQueryChange: React.PropTypes.func.isRequired
  },
  getInitialState(){
    return {
      name: '',
      family: '',
      aliveOnly: false,
      seasons: []
    }
  },
  notifyChange(){
    //we put a little timeout to allow user to type more than one key before searching
    //yes, it's _.debounce
    clearTimeout(this._changeTimeout);
    this._changeTimeout = setTimeout(() => {
      this.props.onQueryChange(this.state);
    }, 100);
  },
  handleNameChange(e){
    /* TODO */
  },
  handleFamilyChange(e){
    /* TODO */
  },
  handleAliveChange(e){
    /* TODO */
  },
  handleSeasonChange(e){
    const season = parseInt(e.target.value);
    const checked = Boolean(e.target.checked);
    let currentSeasons = this.state.seasons;

    if(checked){
      this.setState({ seasons: currentSeasons.concat(season) });
    }
    else {
      this.setState({ seasons: currentSeasons.filter(s => s !== season )});
    }

    this.notifyChange();
  },
  renderSeasons(){
    return this.props.allSeasons.map(s => {
      const isChecked = this.state.seasons.indexOf(s) !== -1;
      return (
        <div className='season-option' key={s}>
          {s}
          <input type="checkbox" checked={ isChecked } value={s} onChange={ this.handleSeasonChange } />
        </div>
      )
    });
  },
  render(){
    const familyOptions = null /* TODO */;
    const seasons = null /* TODO */;
    return (
      <div className="search-form">
      <form>
        <div className="row">
          <div className="col one-half">
            <label htmlFor="character">Actor / personaje</label>
            <input type="text" name="character" value={ this.state.name } onChange={ this.handleNameChange } />
          </div>
          <div className="col one-half">
            <label htmlFor="family">Familia</label>
            <select name="family" value={this.state.family} onChange={ this.handleFamilyChange }>
              <option value="">Todas</option>
              { familyOptions }
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col one-half">
            <label htmlFor="alive">Sólo personajes vivos</label>
            <input type="checkbox" name="alive" checked={ this.state.aliveOnly } onChange={ this.handleAliveChange } />
          </div>
          <div className="col one-half">
            <fieldset>
              <legend>Aparece en temporada</legend>
              { seasons }
            </fieldset>
          </div>
        </div>
      </form>
    </div>
    )
  }
});

export default Form;