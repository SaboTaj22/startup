const express = require('express');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Endpoint to get selected items
apiRouter.get('/selectedItems', (_req, res) => {
  const selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
  res.json(selectedItems);
});

// Endpoint to add items to the cart
apiRouter.post('/addToCart', (req, res) => {
  const { itemName, itemPrice } = req.body;
  let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];

  if (!selectedItems.some(item => item.name === itemName)) {
    selectedItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
  }

  res.json(selectedItems);
});

// Endpoint to clear the cart
apiRouter.post('/clearCart', (_req, res) => {
  localStorage.removeItem('selectedItems');
  res.json([]);
});

// Endpoint to submit an order
apiRouter.post('/submitOrder', (req, res) => {
  const { userName, items } = req.body;

  // Save the order in local storage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push({ userName, items });
  localStorage.setItem('orders', JSON.stringify(orders));

  // Clear the selected items array
  localStorage.removeItem('selectedItems');

  res.json({ success: true, message: 'Order submitted successfully.' });
});

// Endpoint to get all submitted orders
apiRouter.get('/getOrders', (_req, res) => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  res.json(orders);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
