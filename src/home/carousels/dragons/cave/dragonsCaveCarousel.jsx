import React from 'react';
import Carousel from 'nuka-carousel';
import { DragonsCaveImgs } from './dragonsSurroundedImgs' 

export default class DragonsCaveCarousel extends React.Component {
  render() {
    return (
      <Carousel 
      className="my-carousel" 
      autoplay
      renderBottomCenterControls={false}
      width = "300"
      easing = "easeOutCirc"
      speed = {2000}
      autoplayInterval = {3000}
      >
      {DragonsCaveImgs.map(img => {
        return <img src={img} alt="Dragons sequence 304 thumbnails" className="thumbs" />
      })}
      </Carousel>
    );
  }
}