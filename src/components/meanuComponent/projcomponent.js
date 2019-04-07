import React from 'react'


const ProjComp = ({image,url,title,time,description,tag}) => {
  return (<div className="exp-container">
            <div className="codeblock" style={{float:'left',color:'black',height:'100%',maxWidth:'20%'}}>
              {url ? <a href={url}>  <img src={image}/></a> :   <img src={image}/>}
            </div>
            <div style={{float:'right',width:'80%',fontSize:'15px'}}>
              <div>
                <p style={{marginBottom:'0'}}><span style={{fontSize:'1.5em'}}>{title}</span>
                <span style={{textAlign:'right',float:'right'}}>{time}</span></p>
              </div>
              <div > {description.split("\n").map((i,key) => {
              return <div key={key}>• {i}</div>;
              })}</div>
              <div>✿ {tag}</div>
            </div>
          </div>)

}

export default ProjComp
