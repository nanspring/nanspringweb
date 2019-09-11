import React, { Component } from 'react';
import LeftArrow from '../../sliderComponent/leftArrow'
import RightArrow from '../../sliderComponent/rightArrow'
import {CSSTransition} from "react-transition-group"

const Data = ['https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/10636731_279407572253329_746987571212485061_o.jpg?_nc_cat=104&_nc_oc=AQmC6N8BHtrwb_cv5QnphzGyEA185leVPoTtpHz_0PzRS3s-B25JvVALIID5vsVsjoQ&_nc_ht=scontent-lax3-1.xx&oh=23424791e511d3cceab758c98a780226&oe=5E0A5BB2',
              'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/12036562_425250671002351_8660145622736323661_n.jpg?_nc_cat=110&_nc_oc=AQmT3x-0wX7FqOwwn7kbQ4eV2WXgzxiBIYi9rG5h2xqqGq-pf2uPAkr-UumJIzshG9k&_nc_ht=scontent-lax3-1.xx&oh=949b3fba4cd66416dcd8cb4d6a959346&oe=5E0700FC',
              'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/11205148_373339282860157_1255452377292898391_n.jpg?_nc_cat=107&_nc_oc=AQkVwXb3g5NU8ClGg9-7EQ0snLwP6Iy3C6efAl-v89gVTJmiGN9mje4s7je9pXlX_JM&_nc_ht=scontent-lax3-1.xx&oh=6279b1cb0104ea51751b26f21dca2693&oe=5E146C9D'
              ]
const Slide = ({image}) => {
  const styles = {
  backgroundImage: `url(${image})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: '50% 30%',
   height: '100vh',
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
                            return ''

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
