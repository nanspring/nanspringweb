import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

      <div>
        <a href="http://www.facebook.com/ansheng.xu.7">
        <img className="link" src="https://avatars3.githubusercontent.com/u/69631?s=280&v=4"/>
        </a>
        <a href="https://www.linkedin.com/in/ansheng-xu-3b4322119/">
        <img className="link" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"/>
        </a>
        <a href="https://github.com/nanspring">
        <img className="link" src="https://magentys.io/wp-content/uploads/2017/04/github-logo-1.png"/>
        </a>
      </div>
      <div>
      This website is created with react.js,Node.js, javascript, CSS/HTML.
      This web project is independently designed and created by Ansheng Xu
     </div>
     <div>
     Copyright © 2019 Ansheng Xu
     </div>
      </footer>
    );
  }
}

export default Footer;
