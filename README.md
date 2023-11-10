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
- Login - Register and login users. Credentials securely stored in database. Can't purchase items from inventory unless authenticated.
- WebSocket Data - If an item is sold, it is marked as sold for all other users to see.
- React - Application ported to use the React web framework.

# HTML Deliverable
This deliverable represents the structural framework of my application using HTML.

- HTML pages - 4 HTML page that represent the ability to login and purchase art pieces.
- Links - Each page consists of a header and footer. These provide consistent information and links to each unique page.
- Text - Each page contains information about the products, pricing, and policies.
- Images - There are 3 sample images in a grid within the inventory section.
- Login - Input box and submit button for login. Also contains a customer checkout page with an area for them to enter info and submit an order.
- Database - The shopping cart items and customer accounts represent data pulled from the database.
- WebSocket - Counting items in shopping cart and marking them as sold represents realtime communication.
- Git commits with meaningful comments - Bug fix, Page updates and creation, Creation of pages, Description and grammar corrections.

# CSS Deliverable
For this deliverable I created the main styling format used throughout the website, and customized the various HTML pages.
- Header, footer, and main content body customized.
- Navigation elements - You can click on each of the navigation elements and it will take you to the indicated page. Also created hover CSS so buttons looks more responsive and appealing to the eye. I also created a navigation bar that can be seen when the application is shrunk down. It doesn't work yet given that I need to do some JS coding for it. 
- Responsive to window resizing - My app looks great on all window sizes and devices. I went through and customized each page individually.
- Application elements - Used good contrast, whitespace, padding, flex, and appropriate media queries for responsiveness.
- Application text content - Consistent fonts and color styling.
- Application images - Added welcome image and created inventory grid.

# JavaScript Deliverable
For this deliverable I implemented JavaScript so that the application works for a single user. I also added placeholders for future technology as required for this section.
- Login - Created a custom welcome drop down. When you enter your email and press Sign Up you are redirected to the contact.html page in which you fill out a form to create a profile.
- Database - Displayed name after filling out contact form in the top right corner of contact.html. Also displays items that are selected by user using "Add to Cart" in top right corner. This funcionality creates a cart and also offers the option to clear the cart. (More functionality and styling will come later.) Currently user name, email, and items selected are stored and retrieved from local storage, but it will be replaced with the database data later.
- WebSocket - Within the shopping cart I used the a stack data strucuture to add and store items in an array for the creation of an order. The data stored within inventory will be retrieved by the checkout page. This will be replaced with WebSocket numbers later.
- Application logic - The application starts by welcoming you and asking for an email address to begin. After entering and submitting one, you are sent to the contact.html to fill out the form for a profile. (Your profile will be stored in a data base.) There are 3 required fields, which, if not filled out provide instructions of what is needed for you to continue. Once a profile is created, you will then be able to add items to a cart which will be stored in a data base. This data can then be retrieved and uploaded into the checkout page. Once the checkout info is filled out, the order can be submitted and the items in the inventory will be marked as sold.

# Service Deliverable
For this deliverable I added backend endpoints that receive inventory items and return an inventory list.
- Create an HTTP service using Node.js and Express - done!
- Frontend served up using express static middleware - done!
- Calls to third party endpoints - Access API and have it do something on your website!
- Backend service endpoints - Placeholders for login that stores the current user on the server. Endpoints for voting.
- Frontend calls service endpoints - I did this using the fetch function.
  
[Link: notes.md](notes.md)
