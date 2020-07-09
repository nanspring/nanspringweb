import React, { Component } from 'react';
import LeftArrow from '../../sliderComponent/leftArrow'
import RightArrow from '../../sliderComponent/rightArrow'
import Slide from '../../sliderComponent/slide'
import {CSSTransition} from "react-transition-group"

const Data = ['./data/paint1.jpg',
              './data/draw1.jpg',
              './data/draw3.jpg',
              ]
// const Slide = ({image}) => {
//   const styles = {
//   backgroundImage: `url(${image})`,
//    backgroundSize: 'cover',
//    backgroundRepeat: 'no-repeat',
//    backgroundPosition: '50% 30%',
//    height: '100vh',
//    margin: '0 auto',
//    zIndex: -1
//  }
//   return (
//     <CSSTransition
//         in = {true}
//         appear={true}
//         timeout={800}
//         classNames="fade"
//     >
//           <div className="slide" style={styles}>

//           </div>
//           </CSSTransition>
//         )
// }
export default class Artmusic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images:Data,
      image:Data[0],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0){
      return this.setState({currentIndex:this.state.images.length-1})
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
    }));

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length-1){
      return this.setState({currentIndex:0})
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
    }));


  }

  render() {

    const {images,image} = this.state;

    return (

        <div class="content-wrap">

          <div className="col" style={{alignItems: 'center', justifyContent: 'center',
            transition: '0.5s'}}>

                      {
                        images.map((image,i) => {
                          if (this.state.currentIndex === i){
                            return (<Slide key={i} image={image} />)}
                           

                          })}
          <div className='centered'>———— Art & Music ————<p style={{fontSize:'20px'}}>A Differnt Me</p></div>
          <LeftArrow
            prevslide={this.goToPrevSlide}
          />
          <RightArrow
            nextslide={this.goToNextSlide}
          />
        </div>

        </div>


    );
  }
}
