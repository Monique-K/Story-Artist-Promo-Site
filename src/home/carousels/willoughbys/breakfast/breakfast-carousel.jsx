import React from 'react';
import Carousel from 'nuka-carousel';
import { breakfastImgs } from './willoughbys-breakfast';
 
export default class BreakfastCarousel extends React.Component {
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
      {breakfastImgs.map(img => {
        return <img src={img} alt="Nanny Makes Breakfast storyboard" />
      })}
      </Carousel>
    );
  }
}