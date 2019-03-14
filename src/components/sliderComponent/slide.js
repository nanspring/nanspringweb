import React from 'react'
import {CSSTransition} from "react-transition-group"


const Slide = ({image}) => {
  console.log('slide ',image);
  var bg = require(""+image)
  const styles = {
  backgroundImage: `url(`+bg+`)`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: '50% 60%',
   height: 600,
   margin: '0 auto',
   zIndex: -1
 }
  return (
    <CSSTransition
        in = {true}
        appear={true}
        timeout={800}
        classNames="fade"
    >
          <div className="slide" style={styles}>

          </div>
          </CSSTransition>
        )
}

export default Slide
