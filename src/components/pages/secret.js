import React, { Component } from 'react';
import Mail from '../meanuComponent/MailForm'

class Secret extends Component {
  constructor(props){


    super(props);
  }


  render() {
    return(
      <div class="main-wrap">
          <div class="content-wrap" style={{textAlign:'center',padding:'20px',height:'520px'}}>

              <Mail/>

          </div>
      </div>
    );
  }
}

export default Secret;
