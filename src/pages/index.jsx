import React, { useEffect, useRef } from "react";
import { gsap, Power1, Power0 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Bio from "../components/Bio";

import jkcSalesImg from "../images/jkcsales-dashboard.png";
import posterImg from "../images/poster.jpeg";
import intersectLogo from "../images/intersect-logo.png";
import me from "../images/me.jpg";

const Default = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    // Text animation
    gsap.fromTo(
      element.querySelectorAll(
        ".home-section .--heading, .home-section .header__subtitle, .home-section .link"
      ),
      {
        opacity: 0,
        top: 0,
      },
      {
        opacity: 1,
        top: -50,
        duration: 1,
        ease: Power1.easeInOut,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".home-section",
        },
      }
    );
    // img slide in
    gsap.fromTo(
      element.querySelector("#img-poster"),
      {
        opacity: 0,
        transform: "translateY(30px)",
      },
      {
        transform: "translateY(0)",
        duration: 1,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      element.querySelector("#img-dashboard"),
      {
        opacity: 0,
        transform: "translateY(-30px)",
      },
      {
        transform: "translateY(0)",
        duration: 1,
        opacity: 1,
        ease: Power1.easeInOut,
        delay: 0.6,
      }
    );
    // animate out on scrub
    gsap.to(element.querySelector("#img-dashboard"), {
      top: 300,
      duration: 3,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: ".main-section",
        scrub: 0.5,
      },
    });
    gsap.to(element.querySelector("#img-poster"), {
      top: -300,
      duration: 3,
      ease: Power1.easeInOut,
      scrollTrigger: {
        trigger: ".main-section",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="container" ref={ref}>
        <header class="home-section main-section">
          <div className="main-section__text">
            <h1 className="--heading">hello.</h1>
            <p className="header__subtitle">
              My name is Raymond Eng. I'm a frontend developer.
            </p>
            <a href="#" className="link">
              View my work
            </a>
          </div>
          <div className="main-section__imgs">
            <div className="img--vertical" id="img-dashboard">
              <img src={jkcSalesImg} alt="jkc sales dashboard" />
            </div>
            <div className="img--vertical img--offset" id="img-poster">
              <img src={posterImg} alt="Quizbizz Poster" />
            </div>
          </div>
        </header>
        <section className="home-section work-section">
          <h1 className="--heading">work.</h1>
          <p className="header__subtitle"></p>
          <div className="work-grid">
            <img src={posterImg} alt="" class="work-grid__img" />
            <div className="project-card project-card__intersect work-grid__img">
              <img src={intersectLogo} alt="Intersect Logo" />
            </div>
          </div>
        </section>
        <section class="home-section contact-section">
          <h1 className="--large-font --heading">contact me.</h1>
          <p className="header__subtitle">Drop a hello below!</p>
          <div className="flex-center">
            <button className="btn mt-5">ray3ng@gmail.com</button>
          </div>
        </section>
        <Bio
          src={me}
          alt="A picture of me smiling"
          text="purus ut faucibus pulvinar elementum integer enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla at volutpat diam ut
            venenatis tellus in metus vulputate eu scelerisque felis imperdiet
            proin fermentum leo vel orci porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget nullam non"
        />
        <div className="mt-5"></div>
      </div>
      <Footer />
    </>
  );
};

export default Default;
