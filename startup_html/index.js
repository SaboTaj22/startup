const express = require('express');
const { connectToDatabase, addOrder, getOrders } = require('./database');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Connect to the MongoDB database
connectToDatabase();

// Endpoint to add an order
apiRouter.post('/orders', async (req, res) => {
  try {
    const order = req.body;
    const result = await addOrder(order);
    res.status(201).json({ success: true, message: 'Order added successfully', data: result.ops[0] });
  } catch (error) {
    console.error(`Error adding order: ${error.message}`);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Endpoint to get all orders
apiRouter.get('/orders', async (_req, res) => {
  try {
    const orders = await getOrders();
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    console.error(`Error getting orders: ${error.message}`);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
