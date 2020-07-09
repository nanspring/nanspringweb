import React, { Component } from 'react';
import Timeline from 'react-image-timeline';



class Life extends Component {
  constructor(props){


    super(props);
    this.state = {
      events:[
        {
          date: new Date("2020-3-17"),
          text: "Visiting Perth to see my boyfriend(husband right now). And unexpectedly start my new future in Perth.",
          title: "Perth, WA, Australia",
          imageUrl: "https://www.australia.com/content/australia/en/places/perth-and-surrounds/guide-to-perth/_jcr_content/hero/mobile.adapt.768.high.jpg",
          onClick: ()=>window.open("https://www.australia.com/en/places/perth-and-surrounds/guide-to-perth.html"),
          buttonText: 'learn more about Perth',
      },
        {
          date: new Date("2019-9-28"),
          text: "Entering UC San Diego for grad school in computer science. Will graduate in December 2020",
          title: "California, CA, USA",
          imageUrl: "https://ca-times.brightspotcdn.com/dims4/default/9c3ea25/2147483647/strip/true/crop/1600x854+0+0/resize/840x448!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2Fc6%2Fe58081f27535c976921b49239f35%2Fla-me-0516-ucsd-fundraising-20160516-001",
          onClick: ()=>window.open("https://ucsd.edu/"),
          buttonText: 'learn more about UCSD',
      },
        {
          date: new Date("2019-5-20"),
          text: "Graduated from College. B.S. in Data Science. Minor in Music",
          title: "Rochester, NY, USA",
          imageUrl: "https://www.rochester.edu/libraries/images/rush-rhees.jpg",
          onClick: ()=>window.open("https://www.rochester.edu/"),
          buttonText: 'learn more about Rochester',
      },
      {
          date: new Date("2017-7-23"),
          text: "Summer program at Israel Institute of Technology. Study machine learning.",
          title: "Haifa, Israel",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Technion_logo_vector.svg/1200px-Technion_logo_vector.svg.png",
          onClick: ()=>window.open("https://www.technion.ac.il/en/home-2/"),
          buttonText: 'learn more about Technion',
      },
      {
          date: new Date("2016-5-9"),
          text: "Studied Japanese at Waseda University for one month",
          title: "Tokyo, Japan",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Waseda_University_Campus.jpg/440px-Waseda_University_Campus.jpg",
          onClick: ()=>window.open("https://www.waseda.jp/top/en/"),
          buttonText: 'learn more about Waseda'
      },
      {
          date: new Date("2015-5-26"),
          text: "Learned French at ICP (institut catholique de paris) and art history at Paris during the Summer.",
          title: "Paris, France",
          imageUrl: "https://en.parisinfo.com/var/otcp/sites/images/media/1.-photos/80.-photos-sugar/autres-professionnels/ecole-de-langues-ilcf-institut-de-langues-et-de-culture-francaise-5-630x405-c-icp-e-flagny/5074917-1-fre-FR/Ecole-de-langues-ILCF-Institut-de-Langues-et-de-Culture-Francaise-5-630x405-C-ICP-E-Flagny.jpg",
          onClick: ()=>window.open("https://en.icp.fr/"),
          buttonText: 'learn more about ICP'
      },
      {
          date: new Date("2016-8-20"),
          text: "Left Northwest Missouri State University. Transferred to University of Rochester",
          title: "Maryville, MO",
          imageUrl: "https://www.nwmissouri.edu/media/news/2014/11/images/141110veteransmemorial2.jpg",
          onClick: ()=>window.open("https://www.nwmissouri.edu/"),
          buttonText: 'learn more about NWMSU',
      },
      {
          date: new Date("2015-5-4"),
          text: "Studied baroque music history in London for half a month",
          title: "London, UK",
          imageUrl: "https://i.ndtvimg.com/i/2016-04/big-ben-elizabeth-tower-london_650x400_51461675266.jpg?output-quality=70&output-format=webp",
          onClick: ()=>window.open("https://en.wikipedia.org/wiki/London"),
          buttonText: 'learn more about London',
      },
      {
          date: new Date("2014-8-20"),
          text: "First time in College! Went to Northwest Missouri State University",
          title: "Maryville, MO",
          imageUrl: "https://www.nwmissouri.edu/media/news/2014/11/images/141110veteransmemorial2.jpg",
          onClick: ()=>window.open("https://www.nwmissouri.edu/"),
          buttonText: 'learn more about NWMSU',
      },
      {
          date: new Date("2014-7-13"),
          text: "Summer school at Inha University. Studied Korean history. Made lots of life long friends",
          title: "Inha, South Korea",
          imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/be/InhaUniversityEmblem.png",
          onClick: ()=>window.open("https://eng.inha.ac.kr/mbshome/mbs/eng/index.do"),
          buttonText: 'learn more about Inha',
      },
      {
          date: new Date("2014-5-23"),
          text: "Graduated from Shenzhen Foreign Language school. One of the top school in Shenzhen",
          title: "Shenzhen, China",
          imageUrl: "http://www.sfls.net.cn/english/images/index001.jpg",
          onClick: ()=>window.open("http://www.sfls.net.cn/"),
          buttonText: 'learn more about SZFLS',
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
      <div className='content-wrap' style={{padding:'20px',height:'auto'}}>
      <Timeline events={this.state.events} reverseOrder={true} />
      </div>

    );
  }
}

export default Life;
