import React, { Component } from 'react';
// import GrannyCarousel from './carousels/willoughbys/meet-nanna/grannyCarousel';
import BreakfastCarousel from './carousels/willoughbys/breakfast/breakfast-carousel';
import Dragons304Carousel from './carousels/dragons/dragons304Carousel';
// import OpenSeasonCarousel from './carousels/openSeason/openSeasonCarousel';
import MelanoffStoryCarousel from './carousels/willoughbys/melanoffStory/melanoffStoryCarousel';
import TenLivesConfessionCarousel from './carousels/tenLives/tenLivesConfession';
// import OpenSeason1 from './videoPlayers/openSeason';
import Resume from '../resume/resume';

const hero1 = require('../images/homePage/MainPage01.jpg')
const hero2 = require('../images/homePage/MainPage02.jpg')
const hero3 = require('../images/homePage/MainPage03.jpg')
const hero4 = require('../images/homePage/MainPage04.jpg')
const hero5 = require('../images/homePage/MainPage05.jpg')

const WSticky = require('../images/sticky-notes/StickyNote01.jpg');
const OSticky = require('../images/sticky-notes/StickyNote04.jpg');
const TwoSticky = require('../images/sticky-notes/StickyNote02b.jpg');



const heroImages = [hero1, hero2, hero3, hero4, hero5]
let heroImg = hero1;

class Home extends Component {
  constructor() {
    super()
    this.state = {
      carousel: "hero",
      backgroundColour: "gray"
    }
  }

  renderHeroComponent() {
    switch (this.state.carousel) {
      case "hero":
        return (
          <img 
          src={this.setHeroImg()} 
          alt="Mark Stanleigh" 
          />
        );
      // case "granny":
      //   return (<GrannyCarousel className="hero-carousel" />);
      case "breakfast":
        return (<BreakfastCarousel className="hero-carousel" />);
      case "dragons":
          return (<Dragons304Carousel className="hero-carousel" />);
      // case "openSeason":
      //     return (<OpenSeasonCarousel className="hero-carousel" />);
      case "melanoff":
          return (<MelanoffStoryCarousel className="hero-carousel" />);
      // case "openSeasonVideo1":
      //     return (<OpenSeason1 className="hero-carousel hero-video" />);
      case "resume": 
          return (<Resume className="hero-carousel"/>)
      case "tenLivesConfession": 
          return (<TenLivesConfessionCarousel className="hero-carousel"/>)
      default: 
      return <img src={hero1} alt="Mark Stanleigh" />;
    }
  }

  componentDidUpdate() {
    this.renderHeroComponent();
  }

  setHeroImg() {
    const num = Math.floor(Math.random() * 4)
    heroImg = heroImages[num]
    console.log(heroImg)
    return heroImg;
  }
  showHeroImg() {
    this.setState({carousel: "hero", backgroundColour: "gray"})
  }
  // showGrannyCarousel() {
  //   this.setState({carousel: "granny"})
  // }
  showBreakfastCarousel() {
    this.setState({carousel: "breakfast", backgroundColour: "gray"})
  }
  showMelanoffCarousel() {
    this.setState({carousel: "melanoff", backgroundColour: "gray"})
  }
  showTenLivesCarousel() {
    this.setState({carousel: "tenLives", backgroundColour: "gray"})
  }
  showTransformersCarousel() {
    this.setState({carousel: "transformers", backgroundColour: "gray"})
  }
  showDragonsCarousel() {
    this.setState({carousel: "dragons", backgroundColour: "gray"})
  }
  // showOpenSeasonCarousel() {
  //   this.setState({carousel: "openSeason"})
  // }
  showTenLivesConfession() {
    this.setState({carousel: "tenLivesConfession", backgroundColour: "gray"})
  }
  handleResumeClick() {
    this.setState({carousel: "resume", backgroundColour: "gray"})
  }
  

  render() {
    return (
      <div className="home-container">
        <div className="home-links-hero">
        <div className="all-sticky-container">
          <div className="home-links-container">
            <div className="sticky-container">
              <img src={WSticky} alt="Sticky Note" className="sticky willo-sticky" />
              <div className="willo-links">
                  <div onClick={() => this.showMelanoffCarousel()} className="link-item">MELANOFF STORY</div>
                  {/* <div onClick={() => this.showGrannyCarousel()} className="link-item">NANNY BACKSTORY</div> */}
                  <div onClick={() => this.showBreakfastCarousel()} className="link-item">NANNY BREAKFAST</div>
              </div>
            </div>
            <div className="sticky-container">
              <img src={TwoSticky} alt="Sticky Note" className="sticky two-sticky" />
                <div onClick={() => this.showTenLivesConfession()} className="link-item ten-lives-link">CONFESSION</div>
                <div onClick={() => this.showDragonsCarousel()} className="link-item dragons-link">DRAGONS</div>
            </div>
            <div className="sticky-container">
              <img src={OSticky} alt="Sticky Note" className="sticky other-sticky" />
              <div className="link-item resume-link" onClick={() => this.handleResumeClick()}>RESUME</div>
            </div>
          </div>
        </div>
        <div className="title-and-hero">
          <div className="title-container">
            <div>
              <img 
                src={require("../images/homePage/headerImg.jpg")} 
                alt="Mark Stanleigh header" 
                className="title-image"
              />
            </div>
          </div>
            <div className={`home-hero-img ${this.state.backgroundColour === "gray" ? "gray" : "white"}`}>
              {this.renderHeroComponent()}
            </div>  
            <div className="logos-container">
              <img 
                src={require("../images/homePage/CompanyLogos.jpg")} 
                alt="Logos" 
                className="logos"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;

