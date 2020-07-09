import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
         <span className="logo"><img src={require("../../Assets/image/headlogo.png")}/></span>
         </div>
         <nav>
            <ul>
              <div className="header">
                <Link to="/home">Home</Link>
                <div className="dropdown-content">
                <Link to ={"/home/who"}>Who Am I</Link>
                <Link to ={"/home/life"}>Life in a Glance</Link>
                <Link to ={"/home/resume"}>resume</Link>
                </div>
              </div>
            <div className="header">
                <Link to="/coding">Coding</Link>
                <div className="dropdown-content">
                <Link to ={"/coding/work"}>Work Experience</Link>
                <Link to ={"/coding/project"}>Projects</Link>
                </div>
              </div>
              <div className="header">
                <Link to="/artmusic">Art & Music</Link>
                <div className="dropdown-content">
                <Link to ={"/artmusic/music"}>Music</Link>
                <Link to ={"/artmusic/dance"}>Dance</Link>
                <Link to ={"/artmusic/drawing"}>Drawing</Link>
                </div>
              </div>
              <div className="header">
              <Link to="/secret">Contact</Link>
              </div>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
