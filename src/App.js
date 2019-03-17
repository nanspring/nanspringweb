import React, { Component } from 'react';
import {Redirect,BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/Home/home';
import Coding from './components/pages/coding/coding';
import Artmusichome from './components/pages/ArtMusic/artmusic';
import Secret from './components/pages/secret'

/*
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.engine('handlebars',exphbs());
app.set('view engine','handlerbars');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/send',(req,res) => {
  console.log(req.body);
});
*/
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
          <Route path='/secret' component={Secret} />
          <Redirect from="/" to="/home" />
          </Switch>

       <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
