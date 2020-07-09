import React, { Component } from 'react';


class WhoAmI extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var bg = require("../../../Assets/image/swam.jpeg");
    return (
    <div class="content-wrap" style={ { backgroundImage: `url(`+bg+`)`,backgroundPosition: 'center bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',height:'100vh',float:'right' } }>
      <div class="content-message">
    <p>Interested in Software Developer and Data Scientist.</p>
    <p>Graduated from University of Rochester in 2019, I had received my B.S. in data science.</p>
    <p>In December 2020, I will be graduating from UC San Diego with master of science in computer science.</p>
    </div>
      <div class="content-message">
      <p>But data and coding are only part of me. I am also a dancer, a musician and a writer.</p>
      <p> Tchaikovsky is my favorite composer. Ballet is my life. Traveling is my spirit.</p>
    </div>
    <div class="content-message">
    <p>2020 is a very different year. I suppose to doing my intern in the US and try to find a full time job in the US. </p>
    <p>However, the world is getting crazy. Nothing stays the same as before.</p>
    <p>Currently I am in Perth, Australia with my husband. We will start a new future in Australia.</p>
    </div>
    <div class="content-message">
    <p>Here at my little home, I hope you enjoy the stay.</p>
    </div>

      </div>

    );
  }
}

export default WhoAmI;
