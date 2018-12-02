import React from 'react';
import Carousel from 'nuka-carousel';
import { conventionImgs } from './conventionImgs';


export default class TenLivesConventionCarousel extends React.Component {
  render() {
    return (
      <Carousel 
        className="my-carousel" 
        autoplay
        renderBottomCenterControls={false}
        width = "300"
        easing = "easeOutCirc"
        speed = {300}
        autoplayInterval = {1000}
      >
      {conventionImgs.map(img => {
        return <img src={img} alt="10 Lives storyboards" />
      })}
      </Carousel>
    );
  }
}