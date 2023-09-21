# startup

# Elevator Pitch
Imagine a world where startups effortlessly conquer the global market! My cutting-edge sales web application is the ultimate game-changer, empowering startups to effortlessly streamline their sales and marketing efforts. With intuitive customer profiles, real-time marketing updates, and seamless mobile transactions, this web application will revolutionize how businesses connect with their audience. Join me in reshaping the future of commerce, one click at a time.

# Design
<img src ="images/startup_sketch_screenshot.png" width="125">
![](images/startup_sketch_screenshot.png)
# Key Features
- Secure login over HTTPS
- Home page
- Inventory selection page
- Checkout page
- Frequently asked questions page
- Subscription/profile sign up
- Navigation bar
- Shopping cart items stored in database
- Pricing and sold items displayed in real time
- Social media hyperlink

# Technologies
- HTML - Uses correct HTML structure for application. There will be 4 pages; a home page, an inventory page, a FAQ's page, and a checkout page.
- CSS - Application styling that is responsive, uses good whitespace, color choice, and contrast.
- JavaScript - Provides login, product display, shopping cart display, and backend endpoint calls.
- Service - Backend service with endpoints for:
   - Login authentication
   - Storing inventory items customers added to shopping cart
   - Submitting orders
   - Sending invoice emails to customer and business owner
- Database Data - Store customer accounts and shopping cart items in database.
- Login - Register and login users. Credentials securely stored in database. Can't purchase items form inventory unless authenticated.
- WebSocket Data - If an item is sold, it is marked as sold for all other users to see.
- React - Application ported to use the React web framework.

[Link: notes.md](notes.md)
