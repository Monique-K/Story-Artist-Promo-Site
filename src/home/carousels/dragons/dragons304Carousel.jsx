import React from 'react';
import Carousel from 'nuka-carousel';

const t1 = require('../../../images/dragons/Dragons_Seq304_Thumbs/DRGN_Page01.jpg'); 
const t2 = require('../../../images/dragons/Dragons_Seq304_Thumbs/DRGN_Page02.jpg'); 
const t3 = require('../../../images/dragons/Dragons_Seq304_Thumbs/DRGN_Page03.jpg'); 

const dragonsSeq304Imgs = [t1, t2, t3]

export default class Dragons304Carousel extends React.Component {
  render() {
    return (
      <Carousel 
      className="my-carousel" 
      autoplay
      renderBottomCenterControls={false}
      width = "300"
      easing = "easeOutCirc"
      speed = {2000}
      autoplayInterval = {1000}
      >
      {dragonsSeq304Imgs.map(img => {
        return <img src={img} alt="Dragons sequence 304 thumbnails" className="thumbs" />
      })}
      </Carousel>
    );
  }
}