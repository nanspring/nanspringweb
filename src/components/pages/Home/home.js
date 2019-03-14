import React, { Component } from 'react';
import Sidebar from '../../meanuComponent/sidebar'
import Slider from '../../sliderComponent/slider'
import WhoAmI from './who-am-i'
import Life from './life'
import {BrowserRouter as Router,  Switch,Route, Link} from 'react-router-dom';
class Homepage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
    <div class="main-wrap">


      <Route path={'/home/who'} component={WhoAmI} />
      <Route path={'/home/life'} component={Life} />
      <Route exact path={'/home'} component={Slider} />




      </div>


    );
  }
}

export default Homepage;
