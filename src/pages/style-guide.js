import React from "react";
import Nav from "../components/Nav";
import ColourSwatch from "../components/ColourSwatch";
import Footer from '../components/Footer';

const StyleGuide = () => (
    <div className="container">
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
            <h2 class="style__heading">Buttons</h2>
            <div className="style__content">
                <button className="btn">Submit</button>
            </div>
        </section>
        <section>
            <h2 class="style__heading">Links</h2>
            <div className="style__content">
                <a href="#" className="link">This is a link.</a>
            </div>
        </section>
        <section>
            <h2 class="style__heading">Forms</h2>
            <div className="style__content">
                <input class="input" type="text" placeholder="This is a input field"/>
            </div>
        </section>
        <section>
            <h2 class="style__heading">Navigation</h2>
            <div className="style__content">
                <Nav />
            </div>
        </section>
        <section>
            <h2 class="style__heading">Contact</h2>
            <div className="style__content">
                <button>Contact</button>
            </div>
        </section>
        <section>
            <h2 className="style__heading">Bio</h2>
            <div className="style__content">
                <div className="bio">
                    <img src="" alt="" className="bio__img"/>
                </div>
            </div>
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
                <a href="https://github.com/react-static/react-static" className="link">react-static</a>
            </div>
        </section>
        
    </div>
);

export default StyleGuide;
