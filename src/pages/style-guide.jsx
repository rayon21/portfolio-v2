import React from "react";
import { Helmet } from "react-helmet";

import Nav from "../components/Nav";
import ColourSwatch from "../components/ColourSwatch";
import Footer from "../components/Footer";
import TextContainer from "../components/TextContainer";
import LoadingIndicator from "../components/LoadingIndicator";
import SocialMeidaIcons from "../components/SocialMediaIcons";
import Badge from "../components/Badge";
import Bio from "../components/Bio";

const StyleGuide = () => (
  <>
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
            <ColourSwatch hex="eadb00" />
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
        <div className="style__content">{/* <Nav /> */}</div>
      </section>
      <section>
        <h2 className="style__heading">Bio</h2>
        <div className="style__content">
          <Bio
            src="https://placeimg.com/640/480/any"
            text="purus ut faucibus pulvinar elementum integer enim neque volutpat ac
            tincidunt vitae semper quis lectus nulla at volutpat diam ut
            venenatis tellus in metus vulputate eu scelerisque felis imperdiet
            proin fermentum leo vel orci porta non pulvinar neque laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget nullam non"
          />
        </div>
      </section>
      <section>
        <h2 className="style__heading">Badges</h2>
        <div className="style__content">
          <div>
            <Badge>AWS</Badge>
            <Badge>React</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Javascript</Badge>
          </div>
        </div>
      </section>
      <section>
        <h2 className="style__heading">Text Container</h2>
        <TextContainer title="Main Heading" subtitle="Sub Title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TextContainer>
      </section>
      <section>
        <h2 className="style__heading">Social Media Icons</h2>
        <div className="style__content">
          <SocialMeidaIcons />
        </div>
      </section>
      <section>
        <h2 className="style__heading">Loading Indicator</h2>
        <div className="style__content">
          <LoadingIndicator />
        </div>
      </section>

      <section>
        <h2 className="style__heading">Footer</h2>
        <div className="style__content">
          <Footer
            style={{ bottom: "auto", position: "static" }}
            hidePlaceholder
          />
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
          <a href="https://simpleicons.org/" className="link --block">
            Social Media Icons
          </a>
          <a
            href="https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661"
            className="link --block"
          >
            Outside Click Hook
          </a>
          <a
            href="https://medium.com/swlh/how-to-responsive-parallax-footer-bc3ccb3ce8f1"
            className="link --block"
          >
            Parallax Footer
          </a>
        </div>
      </section>
    </div>
    <Footer />
  </>
);

export default StyleGuide;
