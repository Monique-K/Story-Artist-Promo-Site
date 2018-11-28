import React from 'react';
import Carousel from 'nuka-carousel';
import { grannyImgs } from './willoughbys-meet-nanna';
 
export default class GrannyCarousel extends React.Component {
  render() {
    return (
      <Carousel 
      className="my-carousel" 
      autoplay
      renderBottomCenterControls={false}
      width = "300"
      easing = "easeOutCirc"
      speed = {200}
      autoplayInterval = {1000}
      >
      {grannyImgs.map(img => {
        return <img src={img} alt="Meet Nanny storyboard" />
      })}
      </Carousel>
    );
  }
}