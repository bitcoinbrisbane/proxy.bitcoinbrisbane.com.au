require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/circles", async (req, res) => {

  const config = {
    method: "get",
    url: `https://api.glassfrog.com/api/v3/circles`,
    headers: {
    	'X-Auth-Token': process.env.TOKEN, 
    	'Content-Type': 'application/json'
    }
  };

  const response = await axios(config);
  res.send(JSON.stringify(response.data));
});

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
