# startup

# Elevator Pitch
Imagine a world where startups effortlessly conquer the global market! My cutting-edge sales web application is the ultimate game-changer, empowering startups to effortlessly streamline their sales and marketing efforts. With intuitive customer profiles, real-time marketing updates, and seamless mobile transactions, this web application will revolutionize how businesses connect with their audience. Join me in reshaping the future of commerce, one click at a time.

# Design
<img src ="images/startup_sketch_screenshot.png" width="200">

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

# Deliverables
This deliverable represents the structural framework of my application using HTML.

- HTML pages - 4 HTML page that represent the ability to login and purchase art pieces.
- Links - Each page consists of a header and footer. These provide consistent information and links to each unique page.
- Text - Each page contains information about the products, pricing, and policies.
- Images - There are 3 sample images in a grid within the inventory section.
- Login - Input box and submit button for login. Also contains a customer checkout page with an area for them to enter info and submit an order.
- Database - The shopping cart items and customer accounts represent data pulled from the database.
- WebSocket - Counting items in shopping cart and marking them as sold represents realtime communication.
- Git commits with meaningful comments - 

[Link: notes.md](notes.md)
