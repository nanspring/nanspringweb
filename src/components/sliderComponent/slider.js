import React, { Component } from 'react';
import Slide from './slide'
import LeftArrow from './leftArrow'
import RightArrow from './rightArrow'


const Data = ['./data/P5141957.JPG',
              './data/IMG_2836.jpg',
              './data/IMG_3270.jpg',
              './data/IMG_3919.jpg']
export default class Slider extends Component {
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



                      {
                        images.map((image,i) => {
                          if (this.state.currentIndex === i){
                            return (<Slide key={i} image={image} />)}
                            return ''

                          })}
          <div className='centered'>———— Hi, I'm Ansheng ————<p style={{fontSize:'20px'}}>An Artistic Coder</p></div>

          <LeftArrow
            prevslide={this.goToPrevSlide}
          />
          <RightArrow
            nextslide={this.goToNextSlide}
          />


        </div>


    );
  }
}
