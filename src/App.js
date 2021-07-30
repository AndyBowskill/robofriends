import './App.css';
import React from 'react';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robots:user}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
    console.log(event.target.value);
  }

  render() {
    const {robots, searchField} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className='App'>
        <h1>Robots</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
      </div>
    )
  }
}

export default App;
