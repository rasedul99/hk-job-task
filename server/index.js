const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.du4va.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const manufactureCollection = client
      .db("demo-data")
      .collection("manufactur");
    // services api
    app.post("/manufactur", async (req, res) => {
      const info = req.body;
      //   if (!info.name || !parts.) {
      //     return res.send({ success: false, error: "Please provide all info" });
      //   }
      const result = await manufactureCollection.insertOne(info);
      res.send({
        success: true,
        message: "inserted succesfully",
      });
    });

    app.get("/manufactur", async (req, res) => {
      const result = await manufactureCollection.find().toArray();
      console.log(result);
      res.send({ success: true, result: result });
    });
  } catch (error) {
    console.log(error);
  }
};
run();

app.get("/", (req, res) => {
  res.send("Running demo server");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
