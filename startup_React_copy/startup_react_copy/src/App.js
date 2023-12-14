import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeHeader from './login/WelcomeHeader';

function App() {
  return (
    <div>
      {/* Navigation elements */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand name or logo centered in the middle */}
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="navbar-nav">
              {/* Left-side menu items */}
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="inventory.html">Inventory</a></li>
              </ul>
            </div>
            <a className="navbar-brand" href="index.html">Krecia Fullmer Art</a>
            <div className="navbar-nav">
              {/* Right-side menu items */}
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>
                <li className="nav-item"><a className="nav-link" href="checkout.html">Checkout</a></li>
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

        {/* Welcome Header */}
      <WelcomeHeader />


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
                  <a href="inventory.html">Collections</a> | <a href="faq.html">FAQ</a> | <a href="contact.html">Contact</a>
                </p>
                <p style={{ textAlign: 'center', fontSize: '9px' }}>© 2023 Krecia Fullmer Art LLC, All rights reserved</p>
                <p style={{ textAlign: 'center', fontSize: '9px' }}>Taj Poulsen- <a href="https://github.com/SaboTaj22/startup.git" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

