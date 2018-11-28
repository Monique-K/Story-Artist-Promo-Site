import React from 'react';
import Carousel from 'nuka-carousel';

const t1 = 'https://i.imgur.com/GlLPQDB.jpg'; 
const t2 = 'https://i.imgur.com/SCtMZpS.jpg'; 
const t3 = 'https://i.imgur.com/JwYOWQ7.jpg'; 

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
      autoplayInterval = {3000}
      >
      {dragonsSeq304Imgs.map(img => {
        return <img src={img} alt="Dragons sequence 304 thumbnails" className="thumbs" />
      })}
      </Carousel>
    );
  }
}