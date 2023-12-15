import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Inventory } from './inventory/inventory';
import { Faq } from './faq/Faq';
import { Checkout } from './checkout/checkout';
import { Contact } from './contact/contact'


function App() {
  return (
    <BrowserRouter>
    <div>
      {/* Navigation elements */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand name or logo centered in the middle */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="navbar-nav">
              {/* Left-side menu items */}
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/login">Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/inventory">Inventory</NavLink></li>
              </ul>
            </div>
            <NavLink className="navbar-brand" to="index">Krecia Fullmer Art</NavLink>
            <div className="navbar-nav">
              {/* Right-side menu items */}
              <ul className="navbar-nav">
                <li className="nav-item"><NavLink className="nav-link" to="/faq">FAQ</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/checkout">Checkout</NavLink></li>
              </ul>
            </div>
          </div>
          {/* Add a button for toggling the navigation menu */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Add a container for the collapsible navigation menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Collapsible navigation menu (if needed) */}
          </div>
        </div>
      </nav>

      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>


      <div className="quote-container">
        <div id="quote" className="quote-box"></div>
      </div>

      {/* Footer */}
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
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;

