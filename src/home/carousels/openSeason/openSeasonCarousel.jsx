import React from 'react';
import Carousel from 'nuka-carousel';

const t1 = require('../../../images/OS4_Boards/OS4_01.jpg'); 
const t2 = require('../../../images/OS4_Boards/OS4_02.jpg'); 
const t3 = require('../../../images/OS4_Boards/OS4_03.jpg'); 
const t4 = require('../../../images/OS4_Boards/OS4_04.jpg');

const openSeasonImgs = [t1, t2, t3, t4]

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
      {openSeasonImgs.map(img => {
        return <img src={img} alt="Open Season 4 thumbnails" className="thumbs" />
      })}
      </Carousel>
    );
  }
}