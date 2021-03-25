import React from "react";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";
import ColourSwatch from "../components/ColourSwatch";
import Footer from "../components/Footer";
import TextContainer from "../components/TextContainer";

const StyleGuide = () => (
  <div className="container">
    <Helmet>
      <title>Raymond Eng - Style Guide</title>
    </Helmet>
    <section>
      <h2 className="style__heading">Typography</h2>
      <div className="style__content">
        <h1 className="--large-font">Poppins</h1>
        <p>This is paragraph text.</p>
      </div>
    </section>
    <section>
      <h2 className="style__heading">Colours</h2>
      <div className="style__content">
        <div className="flex-container">
          <ColourSwatch hex="0B00FF" />
          <ColourSwatch hex="333" />
        </div>
      </div>
    </section>
    <section>
      <h2 className="style__heading">Buttons</h2>
      <div className="style__content">
        <button className="btn">Submit</button>
      </div>
    </section>
    <section>
      <h2 className="style__heading">Links</h2>
      <div className="style__content">
        <a href="#" className="link">
          This is a link.
        </a>
      </div>
    </section>
    <section>
      <h2 className="style__heading">Forms</h2>
      <div className="style__content">
        <input
          className="input"
          type="text"
          placeholder="This is a input field"
        />
      </div>
    </section>
    <section>
      <h2 className="style__heading">Navigation</h2>
      <div className="style__content">
        <Nav />
      </div>
    </section>
    <section>
      <h2 className="style__heading">Bio</h2>
      <div className="style__content">
        <div className="bio">
          <img
            src="https://placeimg.com/640/480/any"
            alt=""
            className="bio__img"
          />
          <p className="bio__text">
            purus ut faucibus pulvinar elementum integer enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla at volutpat diam ut
            venenatis tellus in metus vulputate eu scelerisque felis imperdiet
            proin fermentum leo vel orci porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget nullam non
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2 className="style__heading">Text Container</h2>
      <TextContainer title="Main Heading" subtitle="Sub Title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextContainer>
    </section>

    <section>
      <h2 className="style__heading">Footer</h2>
      <div className="style__content">
        <Footer />
      </div>
    </section>
    <section>
      <h2 className="style__heading">Citations</h2>
      <div className="style__content">
        <a
          href="https://github.com/react-static/react-static"
          className="link --block"
        >
          react-static
        </a>
        <a
          href="https://fonts.google.com/specimen/Poppins?preview.text_type=custom"
          className="link --block"
        >
          Google Fonts
        </a>
        <a
          href="https://worldvectorlogo.com/logo/espressif-systems"
          className="link --block"
        >
          Logo
        </a>
      </div>
    </section>
  </div>
);

export default StyleGuide;
