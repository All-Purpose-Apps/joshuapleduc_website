/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://github.com/All-Purpose-Apps/joshuapleduc_website/blob/main/LICENSE"
                    target="_blank"
                  >
                    License
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                {/* <i className="fa fa-heart heart" /> */}
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
