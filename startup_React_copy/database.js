const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('orders');
const userCollection = db.collection('user');
const ordersCollection = db.collection('submission');

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`Unable to connect to the database: ${error.message}`);
    throw error;
  }
}

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function addOrder(order) {
  try {
    // Add a timestamp to the order before inserting it into the database
    order.timestamp = new Date();

    // Ensure that at least one item is selected
    if (!order.items || order.items.length === 0) {
      throw new Error('No items selected in the order.');
    }

    // Insert each selected item as a separate document
    const insertedItems = await Promise.all(order.items.map(async (item) => {
      const result = await ordersCollection.insertOne({
        userName: order.userName,
        item: item.name,
        price: item.price,
        timestamp: order.timestamp,
      });
      return result.ops[0];
    }));

    console.log('Order items inserted successfully:', insertedItems);
    return insertedItems;
  } catch (error) {
    console.error(`Error adding order: ${error.message}`);
    throw error;
  }
}

function getOrders() {
  const query = {};
  const options = {
    sort: { timestamp: -1 },
  };
  const cursor = ordersCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  connectToDatabase,
  addOrder,
  getOrders,
  getUser,
  getUserByToken,
  createUser,
};
