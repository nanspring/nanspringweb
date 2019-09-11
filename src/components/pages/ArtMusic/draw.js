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
      src: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54358216_1014047382122674_6433404694902603776_o.jpg?_nc_cat=100&_nc_oc=AQkmo5AKXL5zsI0aKf7mx6i1KQrqA38vhVRiH3HinobhgvQsgBT7CdYzzkJ1cAzABQ4&_nc_ht=scontent-lax3-1.xx&oh=15fbe86ce77493895516ca5020345f5a&oe=5DF570B2',
      width: 3,
      height: 4
    },
    {
      src: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53846734_1014047378789341_3637640568735006720_o.jpg?_nc_cat=111&_nc_oc=AQlXitoWz8uI4gabiwxibNE0qVyCQAS4KyizvE6YDyHmWx6jcYMpBI00SxL2p2kMFgY&_nc_ht=scontent-lax3-1.xx&oh=78487fa3e15a9c27bcb67cd862e41f8d&oe=5E01ADBE',
      width: 4,
      height: 3
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54520980_1014047365456009_4800370120788541440_n.jpg?_nc_cat=105&_nc_oc=AQnamXAL4l96VJMyQt-hHXloQVIiUMk0wkQ96y-IWIUK6V-lfT-SMEqilsd8qavo_9I&_nc_ht=scontent-lax3-1.xx&oh=8aa76a87776d15891b71b111e957d9b5&oe=5E140734',
      width: 1,
      height:1
    },

    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54388243_1014047665455979_7246685429896839168_o.jpg?_nc_cat=106&_nc_oc=AQlAAVMVFNPGYznx--6S-II6jiGXLrm4GSuG7q-ZQqx-8XTP0kAncOdLB1kc9Q2KfPU&_nc_ht=scontent-lax3-1.xx&oh=ecc81529219c0ef962ade4e5b4dd6df0&oe=5DF4C8C4',
      width:3,
      height:4
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54522499_1014052338788845_1310730006200057856_o.jpg?_nc_cat=107&_nc_oc=AQmGiclf_IY-e3BqSaRsP4AoBZOmJSfIbG1nFAE4AS9lj4oBTi3ZmsXr4oAAW9UXWFk&_nc_ht=scontent-lax3-1.xx&oh=c75194694156153e03dd132c2afd4c88&oe=5DEFD44A',
      width:1,
      height:1
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53738122_1014052378788841_4167962969868599296_o.jpg?_nc_cat=110&_nc_oc=AQmlGvwfy_IO5v_1ZnAigWRad292p7GTDooh7oya88x2zdqZbd2s0aLrf8BLfADlf9o&_nc_ht=scontent-lax3-1.xx&oh=70b6392088b08ae51e2c44364c6fc4d3&oe=5E11B9EF',
      width:3,
      height:4
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54041348_1014052475455498_9184784074982555648_o.jpg?_nc_cat=109&_nc_oc=AQklNZruE-kGCkK0qzfTl-oPJEIk6f0rxN-ocpIDl3raQHD4a3h42Y-aAS0qqN7YMI8&_nc_ht=scontent-lax3-1.xx&oh=eba1e51b81aaf7220f4145059cb36ed1&oe=5DFA4E06',
      width:3,
      height:4
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53498369_1014052505455495_9082789034178117632_o.jpg?_nc_cat=108&_nc_oc=AQlUuQzPs0TT-2PDjLpt5e9tNl6LQJirBrfzZh-e0E_vOxGh2ZbEXe_Q-jYrpk1vgdA&_nc_ht=scontent-lax3-1.xx&oh=790470331152a84e667d5b914d3a1eab&oe=5DFFD3F6',
      width:3,
      height:4
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/53824251_1014052545455491_8857173873838260224_o.jpg?_nc_cat=100&_nc_oc=AQmxqNQcSnZ1kZEBG0kDGb_5eruI5e6TpSvnx5Jxx2_gDmZd-3kqflwboC9EESo3I9g&_nc_ht=scontent-lax3-1.xx&oh=9f054e2e66493d5c7087d79fbcb3541f&oe=5E1161F5',
      width:2,
      height:3
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54255348_1014052578788821_3942272153679822848_o.jpg?_nc_cat=106&_nc_oc=AQmOrQbN_OIeEpDa3ByFEeZ4MkGnyWoAsKSQr62_G3Ufb11r6FiPYHEANbVuBs7vLnw&_nc_ht=scontent-lax3-1.xx&oh=82f3864e3b8f765a4c48d087afa4cea0&oe=5E13ECD1',
      width:3,
      heigth:4
    },
    {
      src:'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/54278050_1014052612122151_4594541471054430208_n.jpg?_nc_cat=103&_nc_oc=AQmijFV7tApQVakbVqth3z9WYaNe3nNwAQCgCvOgp-RM7QUeD7Zp5k3_SWrhIcEDaCE&_nc_ht=scontent-lax3-1.xx&oh=660130d63aad57caf425290486a0a1ad&oe=5E0D69C1',
      width:3,
      height:4
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
