import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Home/home';
import Coding from './components/pages/coding/coding';
import Artmusichome from './components/pages/ArtMusic/artmusic';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Header />
          <Switch>
          <Route path='/home' component={Homepage} />

          <Route path='/coding' component={Coding} />
          <Route path='/artmusic' component={Artmusichome} />
          </Switch>

       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
