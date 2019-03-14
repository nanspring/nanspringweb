import React from 'react'
import {Link} from 'react-router-dom';

const Floatcode = ({image,url,position}) => {
  return (<div className="codeblock">
          {url ? <a href={url}>  <img src={image}/></a> :   <img src={image}/>}
          <p>{position}</p>
          </div>)

}

export default Floatcode
