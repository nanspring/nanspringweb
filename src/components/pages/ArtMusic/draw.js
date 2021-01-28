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
      src: 'https://scontent.fper10-1.fna.fbcdn.net/v/t1.0-9/54358216_1014047382122674_6433404694902603776_o.jpg?_nc_cat=100&ccb=2&_nc_sid=cdbe9c&_nc_ohc=jMfSfA3-TasAX-DIwbs&_nc_ht=scontent.fper10-1.fna&oh=a00d9263a2ccd210ed5eb8a1626474ae&oe=6039924E',
      width: 3,
      height: 4
    },
    {
      src: 'https://scontent.fper10-1.fna.fbcdn.net/v/t1.0-9/53846734_1014047378789341_3637640568735006720_o.jpg?_nc_cat=111&ccb=2&_nc_sid=cdbe9c&_nc_ohc=FjgZq5apD-MAX8g9W6p&_nc_ht=scontent.fper10-1.fna&oh=7d85709fee0e100416a3d79b4c7791fb&oe=603932C2',
      width: 4,
      height: 3
    },
    {
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/54520980_1014047365456009_4800370120788541440_n.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_ohc=UEC-qUnsdmYAX_AS9n2&_nc_ht=scontent.fper10-2.fna&oh=4e5b7a374e17e24e7ee8bc54f83c307d&oe=6036AB4C',
      width: 3,
      height:4
    },

    {  
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/53498369_1014052505455495_9082789034178117632_o.jpg?_nc_cat=108&ccb=2&_nc_sid=0debeb&_nc_ohc=hKCeGTh6h0sAX8FWZYn&_nc_ht=scontent.fper10-2.fna&oh=e325b0ee65e15d46ea36ba648d848307&oe=6037180A',
      width:1,
      height:1
    },
    {
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/54522499_1014052338788845_1310730006200057856_o.jpg?_nc_cat=107&ccb=2&_nc_sid=0debeb&_nc_ohc=KYDvdoNtvegAX9PXMLg&_nc_oc=AQmSCQrp4OepZVRGxqRhoFtGJ4Wb_9-59tbva1Up5jBnJisW3es14vUNSb5OPl3-5vs&_nc_ht=scontent.fper10-2.fna&oh=87987a9ad9821c80cc7d8adaedf99fd7&oe=603745B6',
      width:1,
      height:1
    },
    {
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/54388243_1014047665455979_7246685429896839168_o.jpg?_nc_cat=106&ccb=2&_nc_sid=cdbe9c&_nc_ohc=HH59qA5Vs8cAX8so0Sa&_nc_ht=scontent.fper10-2.fna&oh=2974d016ea059714175ce30d24b27218&oe=603645BC',
      width:2,
      height:2
    },
    {
      src:'https://scontent.fper10-1.fna.fbcdn.net/v/t1.0-9/53738122_1014052378788841_4167962969868599296_o.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=S3zejl-YPtUAX_junPP&_nc_ht=scontent.fper10-1.fna&oh=f2ba8c9e7dc4396edbba14720c2662ba&oe=6038F891',
      width:3,
      height:4
    },
    {
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/53676963_1014052408788838_3356325308973187072_n.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_ohc=IUahck_VX3gAX8N_8kn&_nc_ht=scontent.fper10-2.fna&oh=de40078ba14818a14468ae307096307b&oe=6037D6A0',
      width:3,
      height:4
    },
    {
      src:'https://scontent.fper10-1.fna.fbcdn.net/v/t1.0-9/54041348_1014052475455498_9184784074982555648_o.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=FLe5cYdRLGgAX-S8reH&_nc_ht=scontent.fper10-1.fna&oh=9761719d92258325a136df102e407edb&oe=6038A97A',
      width:3,
      height:4
    },
    {
      src:'https://scontent.fper10-1.fna.fbcdn.net/v/t1.0-9/53824251_1014052545455491_8857173873838260224_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=xKThHWuvfGwAX-ZkZYz&_nc_ht=scontent.fper10-1.fna&oh=359c4f153b6440360fe7787462946fd3&oe=6039508B',
      width:1,
      heigth:1
    },
    {
      src:'https://scontent.fper10-2.fna.fbcdn.net/v/t1.0-9/54278050_1014052612122151_4594541471054430208_n.jpg?_nc_cat=103&ccb=2&_nc_sid=0debeb&_nc_ohc=qbyBtyccI5sAX8zVLlj&_nc_ht=scontent.fper10-2.fna&oh=9504aa6225a2c7accb64e01ab15c5ac5&oe=6039543F',
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
