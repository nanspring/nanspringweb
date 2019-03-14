import React, { Component } from 'react';
import {BrowserRouter as Router,  Switch,Route, Link} from 'react-router-dom';
import Artmusic from './artmusicdefault'
import Dance from './dance'
import Draw from './draw'
import Music from './music'
class Artmusichome extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div class="main-wrap">


      <Route path={'/artmusic/music'} component={Music} />
      <Route path={'/artmusic/dance'} component={Dance} />
      <Route path={'/artmusic/drawing'} component={Draw} />
      <Route exact path={'/artmusic'} component={Artmusic} />




      </div>


    );
  }
}

export default Artmusichome;
