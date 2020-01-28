import React, { Component } from 'react';

import CardList from './components/CardList/CardList'

import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

class App extends Component {

  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {

    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      this.setState({ monsters: data });
    };

    fetchData();
    
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          value={this.state.searchField}
          placeholder='Search Monster'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;