import React, { Component } from 'react';
import Sidebar from '../../meanuComponent/sidebar'
import Floatcode from '../../meanuComponent/floatcode'
import Code from './code_default'
import Experience from './experience'
import Project from './project'
import {BrowserRouter as Router,  Switch,Route, Link} from 'react-router-dom';
import {CSSTransition} from "react-transition-group"
class Coding extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <CSSTransition
          in = {true}
          appear={true}
          timeout={800}
          classNames="fade"
      >
    <div class="main-wrap">


    <Route path={'/coding/work'} component={Experience} />
    <Route path={'/coding/project'} component={Project} />
      <Route exact path={'/coding'} component={Code} />




      </div>
      </CSSTransition>
    );

}
}

export default Coding;
