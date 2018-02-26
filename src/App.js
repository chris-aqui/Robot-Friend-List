// father of all components
import React, {Component} from 'react';
import CardList from './CardList';
// import { robots } from './robots'; // removed and adding to componentdidmount
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
  constructor(){
    super()
    this.state={ // these are the thing that can change in the app.
      robots : [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSeachChange = (event) => {
    this.setState({ searchfield: event.target.value }); // changes the state so the seachfeild is updated
    // console.log(event.target.value);
    // console.log(filterRobots);
  }

  render(){
    const filterRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return <h1>Loading</h1> // will dislplay a loading message while waiting on fetched data
    } else {
      return <div className="tc">
          <h1 className= 'f1'>RobotFriends</h1>
          <SearchBox seachChange={this.onSeachChange} />
          <Scroll>
          <CardList robots={filterRobots} />
          </Scroll>
        </div>;
    }
  }
  // stuff in the return section will display back on screeen
}

export default App;