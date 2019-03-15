import React, { Component } from 'react';
import Timeline from 'react-image-timeline';



class Life extends Component {
  constructor(props){


    super(props);
    this.state = {
      events:[{
          date: new Date("2019-5-20"),
          text: "Graduating from College. B.S. in Data Science. Minor in Music",
          title: "Rochester, NY, USA",
          imageUrl: "https://www.rochester.edu/libraries/images/rush-rhees.jpg"
      },
      {
          date: new Date("2017-7-23"),
          text: "Summer program at Israel Institute of Technology. Study machine learning.",
          title: "Haifa, Israel",
          imageUrl: "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/18953406_1495472143850220_5778972052070416442_o.jpg?_nc_cat=104&_nc_ht=scontent-lga3-1.xx&oh=b92a09ab0f2c3f367312d53224fe6c92&oe=5D22EC4C"
      },
      {
          date: new Date("2016-5-9"),
          text: "Studied Japanese at Waseda University for one month",
          title: "Tokyo, Japan",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Waseda_University_Campus.jpg/440px-Waseda_University_Campus.jpg"
      },
      {
          date: new Date("2015-5-26"),
          text: "Learned French at ICIF (institut catholique de paris) and art history at Paris during the Summer.",
          title: "Paris, France",
          imageUrl: "https://en.parisinfo.com/var/otcp/sites/images/media/1.-photos/80.-photos-sugar/autres-professionnels/ecole-de-langues-ilcf-institut-de-langues-et-de-culture-francaise-5-630x405-c-icp-e-flagny/5074917-1-fre-FR/Ecole-de-langues-ILCF-Institut-de-Langues-et-de-Culture-Francaise-5-630x405-C-ICP-E-Flagny.jpg"
      },
      {
          date: new Date("2016-8-20"),
          text: "Left Northwest Missouri State University. Transferred to University of Rochester",
          title: "Maryville, MO",
          imageUrl: "https://www.nwmissouri.edu/media/news/2014/11/images/141110veteransmemorial2.jpg"
      },
      {
          date: new Date("2015-5-4"),
          text: "Studied baroque music history in London for half a month",
          title: "London, UK",
          imageUrl: "https://i.ndtvimg.com/i/2016-04/big-ben-elizabeth-tower-london_650x400_51461675266.jpg?output-quality=70&output-format=webp"
      },
      {
          date: new Date("2014-8-20"),
          text: "First time in College! Went to Northwest Missouri State University",
          title: "Maryville, MO",
          imageUrl: "https://www.nwmissouri.edu/media/news/2014/11/images/141110veteransmemorial2.jpg"
      },
      {
          date: new Date("2014-7-13"),
          text: "Summer school at Inha University. Studied Korean history. Made lots of life long friends",
          title: "Inha, South Korea",
          imageUrl: "https://www.inha.ac.kr/user/eng/k2board/227025/eng1527033971351_b_img.jpg"
      },
      {
          date: new Date("2014-5-23"),
          text: "Graduated from Shenzhen Foreign Language school. One of the top school in Shenzhen",
          title: "Shenzhen, China",
          imageUrl: "http://www.sfls.net.cn/english/images/index001.jpg"
      },
      {
          date: new Date("2011-7-13"),
          text: "Graduated from Cuiyuan Middle School",
          title: "Shenzhen, China",
          imageUrl: "http://atth.jzb.com/forum/201604/12/152721qjl3ndzc2l2djzdg.jpg"
      }
    ]
    }
  }

  render() {
    require('../../../Assets/css/timeline.css');
    return (
      <div className='content-wrap' style={{padding:'20px'}}>
      <Timeline events={this.state.events} reverseOrder={true} />
      </div>

    );
  }
}

export default Life;
