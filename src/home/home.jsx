import React, { Component } from 'react';
import GrannyCarousel from './carousels/willoughbys/meet-nanna/grannyCarousel';
import BreakfastCarousel from './carousels/willoughbys/breakfast/breakfast-carousel';
import Dragons304Carousel from './carousels/dragons/dragons304Carousel';
// import OpenSeasonCarousel from './carousels/openSeason/openSeasonCarousel';
import MelanoffStoryCarousel from './carousels/willoughbys/melanoffStory/melanoffStoryCarousel';
import TenLivesConfessionCarousel from './carousels/tenLives/tenLivesConfession';
import TenLivesConventionCarousel from './carousels/tenLives/convention/tenLivesConvention';
import Resume from '../resume/resume';
import AboutPage from '../about/about';

const hero1 = require('../images/homePage/MainPage01.jpg')
const hero2 = require('../images/homePage/MainPage02.jpg')
const hero3 = require('../images/homePage/MainPage03.jpg')
const hero4 = require('../images/homePage/MainPage04.jpg')
const hero5 = require('../images/homePage/MainPage05.jpg')


const heroImages = [hero1, hero2, hero3, hero4, hero5]
let heroImg = hero5;

class Home extends Component {
  constructor() {
    super()
    this.state = {
      carousel: "hero",
      backgroundColour: "gray",
      showLogos: true
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
      case "granny":
        return (<GrannyCarousel className="hero-carousel" />);
      case "breakfast":
        return (<BreakfastCarousel className="hero-carousel" />);
      case "dragons":
          return (<Dragons304Carousel className="hero-carousel" />);
      // case "openSeason":
      //     return (<OpenSeasonCarousel className="hero-carousel" />);
      case "melanoff":
          return (<MelanoffStoryCarousel className="hero-carousel" />);
      case "resume": 
          return (<Resume className="hero-carousel"/>)
      case "tenLivesConfession": 
          return (<TenLivesConfessionCarousel className="hero-carousel"/>);
      case "tenLivesConvention": 
          return (<TenLivesConventionCarousel className="hero-carousel"/>)
      case "about": 
          return(<AboutPage className="hero-carousel" />)
      default: 
      return <img src={hero1} alt="Mark Stanleigh" />;
    }
  }

  componentDidUpdate() {
    this.renderHeroComponent();
  }

  setHeroImg() {
    const num = Math.floor(Math.random() * 5)
    heroImg = heroImages[num]
    console.log(heroImg)
    return heroImg;
  }
  showHeroImg() {
    this.setState({carousel: "hero", backgroundColour: "gray", showLogos: true})
  }
  showGrannyCarousel() {
    this.setState({carousel: "granny", backgroundColour: "gray", showLogos: true})
  }
  showBreakfastCarousel() {
    this.setState({carousel: "breakfast", backgroundColour: "gray", showLogos: true})
  }
  showMelanoffCarousel() {
    this.setState({carousel: "melanoff", backgroundColour: "gray", showLogos: true})
  }
  showTenLivesCarousel() {
    this.setState({carousel: "tenLives", backgroundColour: "gray", showLogos: true})
  }
  showTransformersCarousel() {
    this.setState({carousel: "transformers", backgroundColour: "gray", showLogos: true})
  }
  showDragonsCarousel() {
    this.setState({carousel: "dragons", backgroundColour: "gray", showLogos: true})
  }
  // showOpenSeasonCarousel() {
  //   this.setState({carousel: "openSeason", showLogos: true, backgroundColour: "gray"})
  // }
  showTenLivesConfession() {
    this.setState({carousel: "tenLivesConfession", backgroundColour: "gray", showLogos: true})
  }
  showTenLivesConvention() {
    this.setState({carousel: "tenLivesConvention", backgroundColour: "gray", showLogos: true})
  }
  handleResumeClick() {
    this.setState({carousel: "resume", backgroundColour: "white", showLogos: false})
  }
  showAboutPage() {
    this.setState({carousel: "resume", backgroundColour: "white", showLogos: false})
  }  

  render() {
    return (
      <div className="home-container">
        <div className="home-links-hero">
        <div className="all-sticky-container">
          <div className="home-links-container">
            <div className="sticky-container">
              <img src={require("../images/sticky-notes/StickyNotesAll.jpg")} alt="Sticky Note" className="sticky" />
              <div onClick={() => this.showMelanoffCarousel()} className="link-item melanoff-link">- MELANOFF STORY</div>
              <div onClick={() => this.showGrannyCarousel()} className="link-item nanny-link">- NANNY BACKSTORY</div>
              <div onClick={() => this.showBreakfastCarousel()} className="link-item bfast-link">- NANNY BREAKFAST</div>
              <div onClick={() => this.showTenLivesConfession()} className="link-item confession-link">- CONFESSION</div>
              <div onClick={() => this.showTenLivesConvention()} className="link-item convention-link">- CONVENTION</div> 
              <div onClick={() => this.showDragonsCarousel()} className="link-item dragons-link">- DRAGONS</div> 
              <div onClick={() => this.showOpenSeasonCarousel()} className="link-item open-season-link">- OPEN SEASON</div> 
              <div onClick={() => this.handleResumeClick()} className="link-item resume-link">- RESUME</div>
              <div onClick={() => this.showAboutPage()} className="link-item about-link">- ABOUT</div>
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
                className={`${this.state.showLogos === true ? "logos" : "hidden"}`}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;

