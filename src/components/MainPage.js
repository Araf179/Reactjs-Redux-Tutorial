import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/header';


import '../containers/App.css';

// parameter state comes from index.js provider store state(rootReducers)


class MainPage extends Component {
  componentDidMount() {
    //We request robots, comes in as a prop which is dispatched 
    //To our reducer
    this.props.onRequestRobots();
  }

  filterRobots = (robots) => {
    var filteredRobots;
    return filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    const { robots, onSearchChange, isPending } = this.props;
    console.log(robots)
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Header />
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default MainPage;