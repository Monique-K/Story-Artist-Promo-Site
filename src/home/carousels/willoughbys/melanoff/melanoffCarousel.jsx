import React from 'react';
import Carousel from 'nuka-carousel';
import { melanoffImgs } from './melanoff';

export default class Dragons304Carousel extends React.Component {
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
      {melanoffImgs.map(img => {
        return <img src={img} alt="Open Season 4 thumbnails" />
      })}
      </Carousel>
    );
  }
}