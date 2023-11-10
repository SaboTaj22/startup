const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
