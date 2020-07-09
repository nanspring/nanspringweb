import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';


class Resume extends Component {
  constructor(props){
    super(props);
    this.state={
      numPages: null,
    pageNumber: 1,
    resume:'../../../../public/resume.pdf'
    }
  }

  onDocumentLoadSuccess = ({ numPages }) => {
   this.setState({ numPages });
 }


  render() {
    const { pageNumber, numPages } = this.state;
    return(
          <div class="content-wrap" style={{textAlign:'center',padding:'20px',height:'100vh'}}>

          <div>
            <iframe src="https://drive.google.com/file/d/1-mCATPF0JdeR8SvzV7O6pVwcml1VqUuL/preview" width="740" height="600"></iframe>
            </div>

          </div>
    );
  }
}

export default Resume;
