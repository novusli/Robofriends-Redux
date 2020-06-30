import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';


//what state should listen to and send down as props
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//what props should listen to that actions need to get dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

/* 
React Redux provides a connect function to read values from the Redux store 
and re-read the values when the store updates. 
The connect function takes two arguments, both optional:
1. mapStateToProps: called every time the store state changes. It receives the entire store state,
and should return an object of data this component needs.

2. mapDispatchToProps: this parameter can either be a function or an object
  1). If it's an function, it will be called once on component creation. It will receive dispatch as an argument,
  and should return an object full of functions that use dispatch to dispatch actions.

  2). If it's an object full of action creators, each action creator will be turned into a prop function 
  that automatically dispatches its action when called.  


*/

//connect() is a Higher Order Function, the returned function is gonna run the App
//connect function makes App subscribe to any state changes in the redux store
//what state or dispatch should App listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);