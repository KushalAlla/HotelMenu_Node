const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const db = require("./db");
app.use(cors());

// app.get("/getMenu", (req, res) => {
//   // Get the 'menuday' header (case-sensitive: should be lowercase)
//   const reqHead = req.headers["menuday"];
//   console.log("Received MenuDay header:", reqHead); // Log the value of the header
//   res.send(reqHead);
// });

app.get("/getMenu", async (req, res) => {
  const reqHead = req.headers["menuday"];
  console.log("header received: ", reqHead);
  const query = "SELECT * FROM menubyday WHERE menuday = ?";
  try {
    const [results] = await db.pool.query(query, [reqHead]);
    res.json(results);
  } catch (err) {
    console.log("Db error", err);
    res.status(500).send("Error. Request failed");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
