import React from 'react';
import Title from './title';
import Form from './form';
import Results from './results';
import { characters } from '../../data/got';

//Extract different family names from Array of { character }
function extractFamilyNames(people){
  return people.reduce((acc, p) => {
    if(acc.indexOf(p.family) === -1)
      acc.push(p.family);
    return acc;
  }, []).sort();
}

//Extract all different season numbers from Array of { character }
function extractAllSeasons(people){
  return people.reduce((acc, p) => {
    p.seasons.forEach(s => {
      if(acc.indexOf(s) === -1){
        acc.push(s);
      }
    });
    return acc;
  }, []).sort();
}

//Returns true if a given character appears in ALL seasons
function appearsInSeasons(character, seasons){
  return seasons.reduce((acc,s) => {
    if(character.seasons.indexOf(s) === -1){
      acc = false;
    }
    return acc;
  }, true);
}

// Filters the list of characters to include only
// those matching the query
function search(query){
  const nameRegEx = new RegExp(query.name, 'i');
  return characters.filter(c => {
    //name or actor matches query name
    return (
      (nameRegEx.test(c.name) || nameRegEx.test(c.actor))
      //character family equals query family
      && (query.family.trim() === '' || c.family === query.family)
      //character is alive
      && (!query.aliveOnly || c.alive)
      //character appears in query seasons
      && (appearsInSeasons(c, query.seasons))
    );
  });
}

// Game of Thrones search engine app
const Buscador = React.createClass({
  getInitialState(){
    return {
      results: characters,
      familyNames: extractFamilyNames(characters),
      allSeasons: extractAllSeasons(characters)
    }
  },
  handleQueryChange(query){
    this.setState({ results: search(query) });
  },
  render(){
    return (
      <div className='search-engine'>
        <Title text="Buscador Juego de Tronos" />
        <Form
          families={ /* TODO */ }
          allSeasons={ /* TODO */ }
          onQueryChange={ /* TODO */ } />
        <Results results={ /* TODO */ } />
      </div>
    )
  }
});

export default Buscador;