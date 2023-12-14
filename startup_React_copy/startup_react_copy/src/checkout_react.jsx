import React from 'react';

function WelcomeHeader() {
  return (
    <main>
      <div className="checkout-container">
        <div className="row">
          <div className="col-md-6">
            {/* Carousel for Items in Your Cart */}
            <section id="items-carousel">
              <h2>Items in Cart</h2>
              <div id="cart-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <ul>
                      <li>Item 1 - $10.00</li>
                      <li>Item 2 - $15.00</li>
                      <li>Item 3 - $20.00</li>
                      {/* Add more items as needed */}
                    </ul>
                  </div>
                  <div className="carousel-item">
                    <ul>
                      <li>Item 4 - $25.00</li>
                      <li>Item 5 - $30.00</li>
                      {/* Add more items as needed */}
                    </ul>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#cart-carousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#cart-carousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            {/* Customer Information Form */}
            <section id="customer-information">
              <h2>Customer Information</h2>
              <form action="order_confirmation.html" method="post">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <textarea id="address" name="address" className="form-control" rows="4" required></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number/Contact Info:</label>
                  <input type="tel" id="phone" name="phone" className="form-control" required />
                </div>
                <div className="form-group">
                  <label htmlFor="bank">Bank Account Info:</label>
                  <input type="text" id="bank" name="bank" className="form-control" required />
                </div>
                <button type="submit" className="btn btn-primary">Submit Order</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WelcomeHeader;
