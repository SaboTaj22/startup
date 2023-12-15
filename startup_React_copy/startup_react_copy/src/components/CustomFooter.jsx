import React from 'react';
import { NavLink } from 'react-router-dom';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomFooter() {
  return (

      <footer className="Footer" role="contentinfo" data-controller="FooterBreakpoints" data-controllers-bound="FooterBreakpoints">
        <div className="Footer-inner clear">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p style={{ textAlign: 'center' }}>
                  <NavLink to="inventory">Collection</NavLink> | <NavLink to="faq">FAQ</NavLink> | <NavLink to="contact">Contact</NavLink>
                </p>
                <p style={{ textAlign: 'center', fontSize: '9px' }}>© 2023 Krecia Fullmer Art LLC, All rights reserved</p>
                <p style={{ textAlign: 'center', fontSize: '9px' }}>Taj Poulsen- <NavLink to="https://github.com/SaboTaj22/startup.git" target="_blank" rel="noopener noreferrer">GitHub</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

  );
}

export default CustomFooter;