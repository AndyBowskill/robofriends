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

    return <CardList robots={robots} />;
  }
}

export default App;
