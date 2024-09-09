import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components
import david from '@img/luke-chesser.jpg'
import clem from '@img/IMG_2989-EDIT.jpg'

function LandingPageHeader({ portfolio }) {
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
            <div className="card-avatar">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img
                  alt="..."
                  src={clem}
                  style={{ maxHeight: '300px', borderRadius: '300px', filter: 'drop-shadow(0 0 0.75rem black)' }}
                />
              </a>
            </div>
            <div className="motto">
              <h1 className="title">Joshua Perez Leduc</h1>
              <h3 className="description">
                Software Engineer, Frontend Developer
              </h3>
              <br />
              <Button
                className="btn-round mr-1"
                color="neutral"
                href="https://drive.google.com/file/d/1MN3TW6D2E2Tg71VDa2WQSzKb6zbwojkD/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                type="button"
                outline
                onClick={portfolio}
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
