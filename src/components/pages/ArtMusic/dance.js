import YouTube from 'react-youtube';
import React, { Component } from 'react';


class Dance extends Component {
  constructor(props){
    super(props);
  }
render() {
    const opts = {
      height: '430',
      width: '68%'
    };

    return (
      <div class="content-wrap" >
        <div className="video-wrap">
          <div className="video-content" >
          <h5>✿ Random Clips from Everyday Life ✿</h5>
          <p>If I want to dance, every corner is my stage.</p>
          <p>I love ballet, Chinese traditional dance and some modern random moves too. LOL</p>
      

          </div>
          <div className="youtube-wrap">
            <YouTube
              videoId="L_uQ6U08d6A"
              opts={opts}

            />
            </div>
        </div>
        <div  className="video-wrap">
          <div className="video-content" >
          <h5>✿ BALLET ✿</h5>
          <p>I danced ballet for 8 years and 5 years on pointe. </p>
          <p>Though I become too clumsy to dance on pointe now, it is still one of my biggest inspiration </p>
         <p>This is a video when I was 15 years old. A lot of accidents happened in this video</p>
         <p>Who would ever believe I would become a coder in future. Haha</p>
         <p>✿✿✿ I am a youtuber too! Click <a href="https://www.youtube.com/channel/UC2fCSRrtLXQaSPRxhyAUrWg?view_as=subscriber" style={{color:'red'}}>here</a> to see my most recent video! ✿✿✿</p>


          </div>
          <div className="youtube-wrap">
            <YouTube
              videoId="Bex9Hw61B8I"
              opts={opts}

            />
            </div>
        </div>


      </div>
    );
  }


}

export default Dance;
