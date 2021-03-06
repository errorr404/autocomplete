import React from 'react';
import Select from 'react-select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class App extends React.Component {


  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
  //  console.log('handleChange---',selectedOption);

    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;
    console.log('in render--',selectedOption);

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
export default App;
