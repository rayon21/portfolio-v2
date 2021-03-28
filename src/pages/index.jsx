import React from "react";
import Footer from "../components/Footer";
import Bio from "../components/Bio";

const Default = () => (
  <>
    <div className="container">
      <header>
        <h1 className="--large-font">hello.</h1>
        <p className="header__subtitle">
          My name is Raymond. I'm a frontend developer.
        </p>
      </header>
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
    <Footer />
  </>
);

export default Default;
