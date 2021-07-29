import './App.css';
import React from 'react';
import CardList from './components/cardlist/cardlist.component'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      robots: []
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robots:user}));
  }

  render() {
    const {robots} = this.state;

    return (
      <div className='App'>
        <h1>Robots</h1>
        <CardList robots={robots} />;
      </div>
    )
  }
}

export default App;
