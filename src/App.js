import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './CardList';
//import Card from './Card';
import { robots } from './robots';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      robots: robots
    }
  }

  handleSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const {searchTerm, robots} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
      <div className="tc">
        <h1>RoboDex</h1>
        <SearchBox handleSearch={this.handleSearch}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
