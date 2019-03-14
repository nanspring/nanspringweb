import React from 'react'
import {Link} from 'react-router-dom';

const Sidebar = ({name,linkname,match}) => {
  console.log('name ',linkname)
  return (<li className="sidebar bar">
          <Link to ={`${match}/${linkname}`}>
          {name}</Link>
          </li>)

}

export default Sidebar
