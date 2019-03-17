import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

      <div>
        <a href="http://www.facebook.com/ansheng.xu.7">
        <img className="link" src="http://www.everysecond.io/assets/Facebook/Facebook.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/ansheng-xu-3b4322119/">
        <img className="link" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"/>
        </a>
        <a href="https://github.com/nanspring">
        <img className="link" src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"/>
        </a>
      </div>
      <div>
      This website is created with react.js, javascript, CSS/HTML.
     </div>
      </footer>
    );
  }
}

export default Footer;
