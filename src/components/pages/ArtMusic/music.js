import YouTube from 'react-youtube';
import React, { Component } from 'react';


class Music extends Component {
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
          <h5>✿ PIANO ✿</h5>
          <p>I have been learning piano since I was five and am still practicing it now. It is the best way to help with my anxiety </p>
          <p>I love Romatic music the most. Not so much a fan of baroque or classical music.</p>
          <p>Tchaikovsky is my most favortie composer. </p>

         <p>Love Tchaikovsky the most.</p>


          </div>
            <div className="youtube-wrap">
            <YouTube
              videoId="qSzmtf-Mme0"
              opts={opts}

            />
            </div>
        </div>
        <div className="video-wrap">
          <div className="video-content" >
          <h5>✿ CHINESE ZITHER ✿</h5>
          <p>I have been learning Chinese zither for 5 years and achieved the highest ameuter degree in China. </p>
          <p>This is my favorite piece of all time. </p>
         <p>It is describing the autumn of the famous mountain, Xiangshan in Beijing </p>

          </div>
          <div className="youtube-wrap">
            <YouTube
              videoId="DMTrxBqR5uY"
              opts={opts}

            />
            </div>
        </div>

        <div className="video-wrap">
          <div className="video-content" >
          <h5>✿ CHINESE FLUTE ✿</h5>
          <p>I love music so much. I am always ready to explore new instruments</p>
          <p>I spent one of my winter break in college to learn some flute.</p>
          <p>This is a drama theme from Nirvana in Fire. </p>

          </div>
          <div className="youtube-wrap">
            <YouTube
              videoId="ZO5LKpI0pZQ"
              opts={opts}

            />
            </div>
        </div>

        <div className="video-wrap">
          <div className="video-content" >
          <h5>✿ VIOLIN ✿</h5>
          <p>Only have I officialy learned violin for 1 semester. </p>
          <p>I used to do piano accompany in Missouri. The violin professor was kind enough to offer me a lesson. </p>
           <p>This is a piece from my most favorite modern composer Joe Hisaishi. Piano credit to Nelson</p>
           <p>✿✿✿ I am a youtuber too! Click <a href="https://www.youtube.com/channel/UC2fCSRrtLXQaSPRxhyAUrWg?view_as=subscriber">here</a> to see my most recent video! ✿✿✿</p>

          </div>
          <div className="youtube-wrap">
            <YouTube
              videoId="SlT8UoOSHY4"
              opts={opts}

            />
            </div>
        </div>

      </div>
    );
  }


}

export default Music;
