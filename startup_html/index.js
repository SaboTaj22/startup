const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const { connectToDatabase, addOrder, getOrders } = require('./database');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js'); 

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Connect to the MongoDB database
connectToDatabase();

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
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

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});