import React, { Component } from 'react';
import './components/card-list/card-list.component'
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){
    const { monsters, searchField } = this.state;
    //the above line code equal to:
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className = 'App'>
      <SearchBox 
      placeholder = 'search monsters'
      handleChange = {e => this.setState({ searchField: e.target.value })}
      />
      <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
