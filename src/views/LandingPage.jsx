import React, { useRef } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import MultiDropdownNavbar from "@components/MultiDropdownNavbar.jsx";
import LandingPageHeader from "@components/LandingPageHeader.jsx";
import FooterWhite from "@components/FooterWhite.jsx";
import ContactForm from "@components/ContactForm.jsx";
import ProjectsRow from "../components/ProjectsRow";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");

  // Create a ref for the Projects section
  const projectsRef = useRef(null);

  // Function to scroll to Projects section
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MultiDropdownNavbar />
      <LandingPageHeader portfolio={scrollToProjects} />
      <div className="wrapper">
        <div className="section text-center landing-section" style={{ padding: '50px' }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title" style={{ marginTop: '1px' }}>Software Engineer | Fullstack Developer</h2>
                <Col className="ml-auto mr-auto" md="8">
                  <h5>
                    I am an experienced Software Engineer, Full Stack Developer, and Frontend Engineer with a strong focus on creating tailor-made applications to meet the unique business requirements of my clients. My expertise lies in software development, mobile app creation, frontend and backend web development, as well as database and server management.
                  </h5>
                </Col>
                <br />
                <Col >
                  <Button
                    className="btn-fill btn-round mr-2 mt-2"
                    color="danger"
                    href="https://drive.google.com/file/d/1MN3TW6D2E2Tg71VDa2WQSzKb6zbwojkD/view?usp=sharing"
                    target="_blank"
                  >
                    See Resume
                  </Button>
                  <Button
                    className="btn-fill btn-round mr-2 mt-2 "
                    color="danger"
                    href="https://www.linkedin.com/in/joshua-perez-leduc/"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    className="btn-fill btn-round mt-2"
                    color="danger"
                    onClick={scrollToProjects}
                  >
                    See Portfolio
                  </Button>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center landing-section" ref={projectsRef}>
          <ProjectsRow />
        </div>
        <ContactForm />
      </div>
      <FooterWhite />
    </>
  );
}

export default LandingPage;