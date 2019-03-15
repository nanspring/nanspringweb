import React, { Component } from 'react';
import Floatcode from '../../meanuComponent/floatcode'
import {BrowserRouter as Router,  Switch,Route, Link} from 'react-router-dom';
class Code extends Component {

  render() {
    return (
    <div class="content-wrap" style={{padding:'20px'}}>

      <div class="sub-wrap" >
            <div className="left">
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Front End</h5>
              <div className='left-container bar'> JavaScript</div>
              <div className='left-container bar'> jQuery</div>
              <div className='left-container bar'> HTML/CSS</div>
              <div className='left-container bar'> Ajax</div>
              <div className='left-container bar'> Sass</div>
              <div className='left-container bar'> React.js</div>
              <div className='left-container bar'> Node.js</div>
            </div>
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Data Science</h5>
              <div className="left-container bar"> Machine Learning</div>
              <div className='left-container bar'> NLP</div>
              <div className='left-container bar'> Visualization</div>
              <div className='left-container bar'> Time Series</div>
              <div className='left-container bar'> ETL</div>
              <div className='left-container bar'> Scikit-Learn</div>
              <div className='left-container bar'> Pytorch</div>
              <div className='left-container bar'> Feature Select</div>
              <div className='left-container bar'> Survival Analysis</div>
              <div className='left-container bar'> Pytorch</div>
            </div>

            </div>
            <div className ="floatcontainer">
              <div className="avatar">
                <a href = "https://github.com/nanspring">
                <img src = "https://avatars1.githubusercontent.com/u/9919?s=200&v=4"/>
                </a>
              </div>
            </div>
            <div className="right">
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Back End & Other Languages</h5>
              <div className='left-container bar'> Java</div>
              <div className='left-container bar'> Python</div>
              <div className='left-container bar'> SQL</div>
              <div className='left-container bar'> R</div>
              <div className='left-container bar'> Spark</div>
              <div className='left-container bar'> Matlab</div>
              <div className='left-container bar'> C</div>
              <div className='left-container bar'> PHP</div>
            </div>
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Framework</h5>
              <div className='left-container bar'> Spring MVC</div>
              <div className='left-container bar'> Mybatis</div>
            </div>
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Experienced OS</h5>
              <div className='left-container bar'> Linux</div>
              <div className='left-container bar'> MacOS</div>
            </div>
            <div className = "left-container">
              <h5 style={{textAlign: 'center'}}> Version Control</h5>
              <div className="left-container bar"> git</div>
              <div className='left-container bar'> SVN</div>
            </div>
            </div>

      </div>

      <div className="code-container">
        <div className="codeblock" style={{float:'left'}}><h3 style={{fontWeight:'bold',textAlign:'center'}}> Work Experiences</h3><Link to="/coding/work" style={{bottom:'5px'}}>Learn More ...</Link></div>
        <Floatcode image="http://www.headyonder.com/images/pic-logo.png" url="http://www.headyonder.com/" position="Software Engineer Intern"/>
        <Floatcode image="https://is5-ssl.mzstatic.com/image/thumb/Purple62/v4/ad/ab/2a/adab2a6b-daae-4e13-2c3c-8609fc0a6513/source/60x60bb.jpg" url="http://www.naxinjituan.com/" position="Credit Score Modeling Intern"/>
        <Floatcode image="https://media.licdn.com/dms/image/C510BAQFk0-jaGkwBGw/company-logo_400_400/0?e=1560384000&v=beta&t=E3Jo_3jMoDVGs-d-eHBvpkNQxsesTGbg6TzHhGDG0Yw" url="https://www.cityofrochester.gov" position="Marketing Analyst Intern"/>
      </div>
      <div className="code-container">
        <div className="codeblock" style={{float:'left'}}><h3 style={{fontWeight:'bold',textAlign:'center'}}> Projects</h3><p style={{color:'blue'}}> <Link to="/coding/project">Learn More ...</Link></p></div>

        <Floatcode image="https://vertassets.blob.core.windows.net/image/132e4a81/132e4a81-2301-4efd-99a2-48a7f96d0325/ai_artificial_intelligence_istock_832169838.png" position="AI"/>
        <Floatcode image="https://cdn.appenresources.com/wp-content/uploads/2018/03/Recent-Developments-in-Neural-Networks.png"  position="Machine Learning and Data"/>
        <Floatcode image="http://www.sclance.com/pngs/web-logo-png/web_logo_png_1491941.png" position="Personal Web"/>
      </div>
      </div>





    );
  }
}

export default Code;
