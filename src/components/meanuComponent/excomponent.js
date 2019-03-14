import React from 'react'


const Excomp = ({image,url,company,position,timeline,description,tag,place}) => {
  return (<div className="exp-container">
            <div className="codeblock" style={{float:'left',color:'black',height:'100%',maxWidth:'20%'}}>
              <a href={url}>
              <img src={image}/>
              </a>
              <div style={{bottom:0}}>{company}</div>
            </div>
            <div style={{float:'right',width:'80%'}}>
              <div>
                <p style={{marginBottom:'0'}}><span style={{fontSize:'1.5em'}}>{position}</span><span style={{float:'right'}}>{place}</span></p>
                <div style={{textAlign:'right', width:'100%'}}>{timeline}</div>
              </div>
              <div > {description.split("\n").map((i,key) => {
              return <div key={key}>☻ {i}</div>;
              })}</div>
              <div>✿ {tag}</div>
            </div>
          </div>)

}

export default Excomp
