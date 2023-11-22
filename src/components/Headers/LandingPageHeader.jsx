import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
import david from '../../assets/img/sections/david-marcu.jpg'
function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            `url(${david})`,
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">Joshua Perez Leduc</h1>
              <h3 className="description">
                Software Engineer, Frontend Developer
              </h3>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                href="https://drive.google.com/file/d/1q9CMKFyMI-1IAT8P6AqXXX7AuEoGumAG/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                type="button"
                outline
              >
                Portfolio
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
