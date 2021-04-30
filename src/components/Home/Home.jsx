import React from 'react'
import styles from "./Home.module.scss"
import Flickity from 'react-flickity-component'
import Contact from "../Contact"
import About from "../About"
import Reviews from "../Reviews"
import "./flickity.css";
import image from "./images/150609278_1222556061492583_215829972781230928_n.jpg"
import image2 from "./images/130860222_1174440496304140_8132401508928570404_n.jpg"
import image3 from "./images/96776799_1002538246827700_7355240977411342336_n.jpg"
import logo from "./images/glamlogo.png"
// import "../../index.css";

const flickityOptions = {
    "initialIndex": 1,
    "wrapAround": true,
   "autoPlay": true 
}

function Carousel() {
    return (
      <Flickity
      data-flickity='{ "autoPlay": true }'
      options={flickityOptions}>
        <div className={styles.image}>
            {/* <h3 className={styles.sliderText}>BESPOKE GARDEN SOLUTIONS</h3> */}
            <button className={styles.btn}>
                <a className={styles.btnLink} href="#contact">GET IN TOUCH</a>
            </button>
            <img className={styles.image} src={image} />
        </div>
        <div className={styles.image}>
            {/* <h3 className={styles.sliderText}>BESPOKE GARDEN SOLUTIONS</h3> */}
            <img className={styles.image} src={image2} />
        </div>
        <div className={styles.image}>
        {/* <h3 className={styles.sliderText}>BESPOKE GARDEN SOLUTIONS</h3> */}
            <img className={styles.image} src={image3} />

        </div>
        
        
        
      </Flickity>
    );
  }

const Home = () => {
    return (
        <>
                
            <div id="home" className={styles.home}>
                
                
                <Carousel />
                
                {/* <div className={styles.landingText}>
                    <h1>Hi, We're Glamorgan Gardens</h1>
                    <p>With over 15 years experience, we've been rejuvinating gardens in the Cardiff and Vale area to an exceptionally high standard, guaranteed quality, with customer satisfaction our top priority</p>
                </div> */}
            </div>
            <section id="about">
                <About />
            </section>
            <section id="reviews">
                <Reviews />
            </section>
            <section id="contact">
                <Contact />
            </section>
            
        
        </>
    )
}

export default Home
