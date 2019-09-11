import React, { Component } from 'react';
import Floatcode from '../../meanuComponent/floatcode'
import {BrowserRouter as Router,  Switch,Route, Link} from 'react-router-dom';
class Code extends Component {

  render() {
    return (
    <div class="content-wrap" style={{padding:'20px',height:'auto'}}>

      <div class="sub-wrap">
      <div className ="floatcontainer">
        <div className="avatar">
          <a href = "https://github.com/nanspring">
          <img src = "https://avatars1.githubusercontent.com/u/9919?s=200&v=4"/>
          </a>
        </div>
          </div>
            <div style={{backgroundColor:'white',overflow:'auto',marginBottom:'15px'}} >
              <div className="left">
              <div className = "left-container">
                <h4> Front End</h4>
                <li className='left-container bar'> JavaScript</li>
                <li className='left-container bar'> jQuery</li>
                <li className='left-container bar'> HTML/CSS</li>
                <li className='left-container bar'> Ajax</li>
                <li className='left-container bar'> Sass</li>
                <li className='left-container bar'> React.js</li>
                <li className='left-container bar'> Node.js</li>
              </div>
              <div className = "left-container">
                <h4> Data Science</h4>
                <li className="left-container bar"> Machine Learning</li>
                <li className='left-container bar'> NLP</li>
                <li className='left-container bar'> Visualization</li>
                <li className='left-container bar'> Time Series</li>
                <li className='left-container bar'> ETL</li>
                <li className='left-container bar'> Scikit-Learn</li>
                <li className='left-container bar'> Pytorch</li>
                <li className='left-container bar'> Feature Select</li>
                <li className='left-container bar'> Survival Analysis</li>
                <li className='left-container bar'> Pytorch</li>
              </div>
              </div>
              <div className="right">
              <div className = "left-container">
                <h4> Back End & Other Languages</h4>
                <li className='left-container bar'> Java</li>
                <li className='left-container bar'> Python</li>
                <li className='left-container bar'> SQL</li>
                <li className='left-container bar'> R</li>
                <li className='left-container bar'> Spark</li>
                <li className='left-container bar'> Matlab</li>
                <li className='left-container bar'> C</li>
                <li className='left-container bar'> PHP</li>
              </div>
              <div className = "left-container">
                <h4> Framework</h4>
                <li className='left-container bar'> Spring MVC</li>
                <li className='left-container bar'> Mybatis</li>
              </div>
              <div className = "left-container">
                <h4 > Experienced OS</h4>
                <li className='left-container bar'> Linux</li>
                <li className='left-container bar'> MacOS</li>
              </div>
              <div className = "left-container">
                <h4> Version Control</h4>
                <li className="left-container bar"> git</li>
                <li className='left-container bar'> SVN</li>
              </div>
              </div>
          </div>

      </div>

      <div className="code-container">
        <div className="codeblock" style={{float:'left'}}><h3 style={{fontWeight:'bold',textAlign:'center'}}> Work Experiences</h3><Link to="/coding/work" style={{bottom:'5px', color:'grey'}}>Learn More ...</Link></div>
        <Floatcode image="http://www.headyonder.com/images/pic-logo.png" url="http://www.headyonder.com/" position="Software Engineer Intern"/>
        <Floatcode image="https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/ad/ab/2a/adab2a6b-daae-4e13-2c3c-8609fc0a6513/source/60x60bb.jpg" url="http://www.naxinjituan.com/" position="Credit Score Modeling Intern"/>
        <Floatcode image="https://www.cityofrochester.gov/assets/0/117/8589934986/c6791498-270e-40b1-9b81-aca8a510c1b5.jpg?n=8012" url="https://www.cityofrochester.gov" position="Marketing Analyst Intern"/>
      </div>
      <div className="code-container">
        <div className="codeblock" style={{float:'left'}}><h3 style={{fontWeight:'bold',textAlign:'center'}}> Projects</h3> <Link to="/coding/project" style={{bottom:'5px', color:'grey'}}>Learn More ...</Link></div>

        <Floatcode image="https://vertassets.blob.core.windows.net/image/132e4a81/132e4a81-2301-4efd-99a2-48a7f96d0325/ai_artificial_intelligence_istock_832169838.png" position="AI"/>
        <Floatcode image="https://cdn.appenresources.com/wp-content/uploads/2018/03/Recent-Developments-in-Neural-Networks.png"  position="Machine Learning and Data"/>
        <Floatcode image="http://www.sclance.com/pngs/web-logo-png/web_logo_png_1491941.png" position="Personal Web"/>
      </div>
      </div>





    );
  }
}

export default Code;
