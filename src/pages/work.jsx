import React from "react";
import { Helmet } from "react-helmet";
import TextContainer from "../components/TextContainer";
import Image from "../components/Image";
import Footer from "../components/Footer";
import Badge from "../components/Badge";

import jkcDashboardImg from "../images/jkcsales-dashboard.png";
import jkcReportImg from "../images/jkcsales-report.png";
import storyboardImg from "../images/storyboard-1.png";
import personaImg from "../images/persona.png";
import framerImg from "../images/framer.png";

import intersectHomeVideo from "../images/intersect-home.mov";

export const Work = () => (
  <>
    <Helmet>
      <title>Raymond Eng - Work</title>
    </Helmet>
    <div className="container">
      <h1 className="title--large" id="jkcsales">
        project 1.
      </h1>
      <TextContainer title="JKCsales CRM Dashboard" subtitle="Web Application">
        <div>
          <Badge>AWS</Badge>
          <Badge>React</Badge>
          <Badge>MongoDB</Badge>
          <Badge>Javascript</Badge>
        </div>
        <Image src={jkcDashboardImg} alt="JKC dashboard screenshot" />
        <h6 className="subtitle--small">Role</h6>
        <p>Full Stack - Independent Project</p>
        <h6 className="subtitle--small">Overview</h6>
        <p>
          Client required an application to keep track of his sale rep’s service
          transactions. A new CRM web application was developed to replace the
          existing application. The project involved a front facing UI, web
          server, database, and email integration.
        </p>
        <h6 className="subtitle--small">Identify Problems</h6>
        <p>
          Client requested a redesign of his existing CRM. The existing design
          contained unused features that complicated the user interface.
          Additionally, the existing features provided poor data visualization.
        </p>
        <h6 className="subtitle--small">Solutions</h6>
        <p>
          A new web application was developed to address the business concerns.
          The application featured admin and employee views with a shared page
          for data visualization of sale records. Extensive form logic was
          implemented to prevent user errors and improve input efficiency. This
          project was developed in an iterative process to validate business
          requirements.
        </p>
        <h6 className="subtitle--small">Reflection</h6>
        <p>
          This experience has given me the opportunity to integrate my design
          and technical skills to develop a full stack application. It
          highlighted the importance of requirements gathering and the necessity
          to get client feedback often and early. Early on the project, existing
          problems with the existing application were identified and were
          improved upon. The result is an application that exceeded the client’s
          expectation both in the design front and technically as well.
        </p>
        <Image src={jkcReportImg} alt="JKCsales report user interface" />
      </TextContainer>
      <div id="intersect">
        <h1 className="title--large">project 2.</h1>
        <TextContainer title="Intersect" subtitle="Interactive prototype">
          <div>
            <Badge>Framer</Badge>
            <Badge>Figma</Badge>
            <Badge>UI/UX</Badge>
          </div>
          <h6 className="subtitle--small">Role</h6>
          <p>UX/UI Designer, Illustrator, Developer</p>
          <h6 className="subtitle--small">Overview</h6>
          <p>
            My team was tasked with developing a high fidelity prototype for an
            app idea. We decided on a dating mobile application based on
            proximity based matching.
          </p>
          <h6 className="subtitle--small">Identify Problems</h6>
          <p>
            Developing relevant user features that help users accomplish their
            goals.
          </p>
          <h6 className="subtitle--small">Solutions</h6>
          <p>
            Research User interviews were conducted to understand user goals
            Ideation Personas were created to illustrate user needs Design
            Wireframes and high fidelity prototypes were developed in Figma and
            Framer. Test User testing with the high fidelity prototype was done
            to identify problems Heuristic evaluations were performed to
            identify issues.
          </p>
          <div className="flex-center">
            <figure className="figure">
              <img src={personaImg} alt="persona for intersect app" />
              <figcaption>A peronsa developed for Intersect.</figcaption>
            </figure>
          </div>
          <div className="flex-center">
            <figure className="figure">
              <img
                src={storyboardImg}
                alt="Intersect storyboard and user flows sketch"
              />
              <figcaption>Started with key interaction flows</figcaption>
            </figure>
          </div>
          <div className="flex-center">
            <figure className="figure">
              <img
                src={framerImg}
                alt="Screenshot of many screens in Framer Prototying tool"
              />
              <figcaption>Framer prototyping screens</figcaption>
            </figure>
          </div>
          <h6 className="subtitle--small">Reflection</h6>
          <p>
            This project taught me to align my design towards the user goals.
            Without understanding the user or their problems, it is difficult to
            solve their problems.
          </p>
          <div className="flex-center">
            <video autoPlay muted loop class="video__intersect">
              <source src={intersectHomeVideo} type="video/mp4" />
            </video>
          </div>
        </TextContainer>
      </div>
    </div>
    <Footer />
  </>
);

export default Work;
