const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('orders');
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
};
