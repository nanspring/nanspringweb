import React, { Component } from 'react';


class WhoAmI extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var bg = require("../../../Assets/image/paint2.jpg");
    return (
    <div class="content-wrap" style={ { backgroundImage: `url(`+bg+`)`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',height:'100vh',float:'right' } }>
      <div class="content-message">
    Interested in Software Developer and Data Scientist.
    Graduating from University of Rochester in 2019, I will receive my B.S. in data science.
    </div>
      <div class="content-message">
    But data and coding do not define me. I am also a dancer, a musician and a writer.
    Tchaikovsky is my favorite composer. Ballet is my life. Traveling is my spirit.
    </div>
    <div class="content-message">
    I learn what I want to learn. I create what I want to create.
    Never afraid of exploring new things and always believe in myself.
    </div>
    <div class="content-message">
    Here at my little home, I hope you enjoy the stay.
    </div>

      </div>

    );
  }
}

export default WhoAmI;
