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
      src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54358216_1014047382122674_6433404694902603776_o.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=cfcd660eef68369b5e175e72f4d00d7c&oe=5D0822B2',
      width: 3,
      height: 4
    },
    {
      src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/53846734_1014047378789341_3637640568735006720_o.jpg?_nc_cat=111&_nc_ht=scontent-ort2-1.xx&oh=da8623bbed9283637f239994ee7dd14d&oe=5D145FBE',
      width: 4,
      height: 3
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54520980_1014047365456009_4800370120788541440_n.jpg?_nc_cat=105&_nc_ht=scontent-ort2-1.xx&oh=03ff871820111d9657417dd477f7e1ca&oe=5D26B934',
      width: 1,
      height:1
    },

    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54522499_1014052338788845_1310730006200057856_o.jpg?_nc_cat=107&_nc_ht=scontent-ort2-1.xx&oh=54ed01d477882c74266775cce3a7172e&oe=5D02864A',
      width:3,
      height:4
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54041348_1014052475455498_9184784074982555648_o.jpg?_nc_cat=109&_nc_ht=scontent-ort2-1.xx&oh=e1623402f3bc004393dbb205937bf84e&oe=5D0D0006',
      width:1,
      height:1
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54255348_1014052578788821_3942272153679822848_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=a5c7ca1d72b9290ca500d28e5d2a09eb&oe=5D269ED1',
      width:3,
      height:4
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54388243_1014047665455979_7246685429896839168_o.jpg?_nc_cat=106&_nc_ht=scontent-ort2-1.xx&oh=1cd2455d7eff6eb8db8e693365fae648&oe=5D077AC4',
      width:3,
      height:4
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/54278050_1014052612122151_4594541471054430208_n.jpg?_nc_cat=103&_nc_ht=scontent-ort2-1.xx&oh=9767e115999191de3bc33bd9d9c7ae60&oe=5D201BC1',
      width:3,
      height:4
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/53824251_1014052545455491_8857173873838260224_o.jpg?_nc_cat=100&_nc_ht=scontent-ort2-1.xx&oh=c9814149a9aa154e35cd4d7da51a5e60&oe=5D2413F5',
      width:2,
      height:3
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/53738122_1014052378788841_4167962969868599296_o.jpg?_nc_cat=110&_nc_ht=scontent-ort2-1.xx&oh=cdbecb2684a6a5c964dd9bb138da5a6c&oe=5D246BEF',
      width:3,
      heigth:4
    },
    {
      src:'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/53498369_1014052505455495_9082789034178117632_o.jpg?_nc_cat=108&_nc_ht=scontent-ort2-1.xx&oh=8b0ee986b4f85968a18da82241417532&oe=5D1285F6',
      width:3,
      height:4
    }
    ];

    return (
      <div class="content-wrap" style={{padding:'40px'}}>
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
