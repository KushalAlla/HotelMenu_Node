const express = require('express');
const dotenv = require('dotenv').config();
const cors= require('cors');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db')
app.use(cors());

// app.get('/', (req, res) => {
//   res.json({message:'Hello World!!'});
// });

app.get('/getMenu', async (req, res) => {
  try {
    const result = await db.pool.query("select * from menubyday");
    res.send(result);
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
