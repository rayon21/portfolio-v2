import React from "react";
import TextContainer from "../components/TextContainer";
import Footer from "../components/Footer";

export const Work = () => (
  <>
    <div className="container">
      <h1 className="title--large">project 1.</h1>
      <TextContainer title="JKCsales CRM Dashboard" subtitle="Web Application">
        {`Overview:
Client required an application to keep track of his sale rep’s service transactions. A new CRM web application was developed to replace the existing application. The project involved a front facing UI, web server, database, and email integration.

Identify problems:
Client requested a redesign of his existing CRM. The existing design contained unused features that complicated the user interface. Additionally, the existing features provided poor data visualization.

Solutions:
A new web application was developed to address the business concerns. The application featured admin and employee views with a shared page for data visualization of sale records. Extensive form logic was implemented to prevent user errors and improve input efficiency. This project was developed in an iterative process to validate business requirements.

Reflection:

This experience has given me the opportunity to integrate my design and technical skills to develop a full stack application. It highlighted the importance of requirements gathering and the necessity to get client feedback often and early. Early on the project, existing problems with the existing application were identified and were improved upon. The result is an application that exceeded the client’s expectation both in the design front and technically as well.
`}
      </TextContainer>
      <h1 className="title--large">project 2.</h1>
      <TextContainer title="Intersect" subtitle="Interactive prototype">
      Overview:
My team was tasked with developing a high fidelity prototype for an app idea. We decided on a dating mobile application based on proximity based matching. 

Identify problems:
Developing relevant user features that help users accomplish their goals. 

Solutions:
--Process
Research
User interviews were conducted to understand user goals
Ideation
Personas were created to illustrate user needs
Design
Wireframes and high fidelity prototypes were developed in Figma and Framer. 
Test
User testing with the high fidelity prototype was done to identify problems
Heuristic evaluations were performed to identify issues.



Reflection:

This project taught me to align my design towards the user goals. Without understanding the user or their problems, it is difficult to solve their problems.

      </TextContainer>
    </div>
    <Footer />
  </>
);

export default Work;
