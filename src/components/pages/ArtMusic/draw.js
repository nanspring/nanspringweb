import Gallery from 'react-photo-gallery'
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Draw extends Component {
  constructor(){
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
render() {
  const photos = [
    {
      src: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54358216_1014047382122674_6433404694902603776_o.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_ohc=h7_eqzuYvQoAX8t1Kir&_nc_ht=scontent-syd2-1.xx&oh=33c076f239e145730ef9954d69d0ca49&oe=5F2CA04E',
      width: 3,
      height: 4
    },
    {
      src: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/53846734_1014047378789341_3637640568735006720_o.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=UGP0eiHsIIYAX_nsRQh&_nc_ht=scontent-syd2-1.xx&oh=b6f9a610cf908a8ba6c21883fde374ce&oe=5F2C40C2',
      width: 4,
      height: 3
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54520980_1014047365456009_4800370120788541440_n.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_ohc=BzX9b-rFzDMAX_kYbUO&_nc_ht=scontent-syd2-1.xx&oh=4fa008804fd51540114e6ba3f83d197a&oe=5F2DADCC',
      width: 1,
      height:1
    },

    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54388243_1014047665455979_7246685429896839168_o.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=c7J0aC3S194AX_ezlsI&_nc_ht=scontent-syd2-1.xx&oh=0778dfe39793f373c97b94da50b256d3&oe=5F2D483C',
      width:3,
      height:4
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54522499_1014052338788845_1310730006200057856_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=p89j0nHoUccAX8zNTQD&_nc_ht=scontent-syd2-1.xx&oh=880e636c0b2acbf768450cab6445ac37&oe=5F2E4836',
      width:1,
      height:1
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/53738122_1014052378788841_4167962969868599296_o.jpg?_nc_cat=110&_nc_sid=0be424&_nc_ohc=uyo-AeDge10AX_pwXGw&_nc_ht=scontent-syd2-1.xx&oh=87fee9db9ae61f083d664bc9f108861c&oe=5F2C0691',
      width:3,
      height:4
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/53676963_1014052408788838_3356325308973187072_n.jpg?_nc_cat=103&_nc_sid=0be424&_nc_ohc=ZwgNaSURy8QAX8lXXI6&_nc_ht=scontent-syd2-1.xx&oh=42632ec10f43267039155cbdff664c36&oe=5F2AE4A0',
      width:3,
      height:4
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54041348_1014052475455498_9184784074982555648_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=tk5p-vpDzYMAX_gqOSS&_nc_ht=scontent-syd2-1.xx&oh=091918e9a430175ac1b2f6c6e16e9201&oe=5F2BB77A',
      width:3,
      height:4
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/53498369_1014052505455495_9082789034178117632_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=VQLPFCl04gAAX-hUtlw&_nc_ht=scontent-syd2-1.xx&oh=20350f5eec1a3a17e5974db02f6fa8a5&oe=5F2E1A8A',
      width:2,
      height:3
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/54278050_1014052612122151_4594541471054430208_n.jpg?_nc_cat=103&_nc_sid=0be424&_nc_ohc=C94TuFz4jJ4AX9SaTDN&_nc_ht=scontent-syd2-1.xx&oh=d187b893b4d71e91e9f329caae9a907e&oe=5F2C623F',
      width:1,
      heigth:1
    },
    {
      src:'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/53824251_1014052545455491_8857173873838260224_o.jpg?_nc_cat=100&_nc_sid=0be424&_nc_ohc=dGXx6m5XFF0AX922YZ8&_nc_ht=scontent-syd2-1.xx&oh=4319c31b9ed41bc796df9738722a9147&oe=5F2C5E8B',
      width:2,
      height:3
    }
    ];

    return (
      <div class="content-wrap" style={{padding:'40px',height:'auto'}}>
        <Gallery photos={photos} direction={"column"} onClick={this.openLightbox}/>
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }


}

export default Draw;
