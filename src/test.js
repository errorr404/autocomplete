import React from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

var languages = [];
  const aray = [];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }


console.log('length of value',value.length);
// if(value.length>2)
// {
if(value.length>2)
{
  axios.get(`https://api.railwayapi.com/v2/suggest-train/train/${value}/apikey/5ds80h1iu7`).
  then(res =>{
    languages = res.data.trains;
    console.log(languages);

  }).
  catch(e => console.log(e));
} else return [];
  const regex = new RegExp('^' + escapedValue, 'i');
  console.log('regex', regex);

  var arr =  languages.filter(language =>(language.name));
  //console.log(arr);
  return arr;
}

// else return [];

// }

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest className ="auto-suggestion"
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}

export default Test;
