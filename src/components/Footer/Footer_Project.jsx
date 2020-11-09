import React, { useContext } from 'react';
// import { Container } from 'react-bootstrap';
import { Link } from 'gatsby';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';
import { Container, Row, Col } from 'react-bootstrap';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="projects" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>

        <Row>
          <Col></Col>
          <Col>
            <div>
              <Link
                href="../"
                className="cta-btn cta-btn--hero"
              >
                Return to main page
            </Link>
            </div>
          </Col>
          <Col>
            <div>
              <Link
                href="../projects"
                className="cta-btn cta-btn--hero"
              >
                Return to projects list
            </Link>
            </div>
          </Col>
          <Col></Col>
        </Row>

        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://mkiuur.github.io/Github-resume/'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
