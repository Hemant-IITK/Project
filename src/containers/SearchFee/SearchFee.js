import  React,{ Component } from 'react';
import Autosuggest from 'react-autosuggest';
let fee = [];
const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : fee.filter(f =>
      f.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  const getSuggestionValue = suggestion => suggestion;
  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );
class Search extends Component {
    state = {
        suggestions: [],
        value:''
    }
    feeInputHandler = () => {
        fetch('http://localhost:3000/locations')
        .then(res => res.json())
        .then(data => {
            fee = data.location.slice(0);
        });
    }
    componentDidMount = () => {
        this.feeInputHandler();
    }
    onChange = (event, { newValue }) => {
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
        const value = this.state.value
        const suggestions = this.state.suggestions;
    
        const inputProps = {
          placeholder: 'Fee range',
          value,
          onChange: this.onChange
        };
        return(
                <div className='Autosuggest'>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />  
                </div>
        );
    }
}
export default Search;
