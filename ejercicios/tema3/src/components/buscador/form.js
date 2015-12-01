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
    //we put a little timeout to allow user to type many keys before searching
    clearTimeout(this._changeTimeout);
    this._changeTimeout = setTimeout(() => {
      this.props.onQueryChange(this.state);
    }, 100);
  },
  handleNameChange(e){
    /* TODO */
    this.notifyChange();
  },
  handleFamilyChange(e){
    /* TODO */
    this.notifyChange();
  },
  handleAliveChange(e){
    /* TODO */
    this.notifyChange();
  },
  handleSeasonChange(e){
    const season = parseInt(e.target.value);
    const checked = Boolean(e.target.checked);
    let currentSeasons = this.state.seasons;

    if(checked){
      /* TODO */
    }
    else {
      /* TODO */
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
    const familyOptions = /* TODO */;
    const seasons = /* TODO */;
    return (
      <div className="search-form">
      <form>
        <div className="row">
          <div className="col one-half">
            <label htmlFor="character">Actor / personaje</label>
            <input type="text" name="character" value={ /* TODO */ } onChange={ /* TODO */ } />
          </div>
          <div className="col one-half">
            <label htmlFor="family">Familia</label>
            <select name="family" value={ /* TODO */ } onChange={ /* TODO */ }>
              <option value="">Todas</option>
              { familyOptions }
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col one-half">
            <label htmlFor="alive">Sólo personajes vivos</label>
            <input type="checkbox" name="alive" checked={ /* TODO */ } onChange={ /* TODO */ } />
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