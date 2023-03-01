require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/meetup", async (req, res) => {

//   query='query { self { id name } }'
// curl -X POST https://api.meetup.com/gql \
//   -H 'Authorization: Bearer {YOUR_TOKEN}' \
//   -H 'Content-Type: application/json' \
//   -d @- <<EOF
//     {"query": "$query"}
// EOF

  const config = {
    method: "get",
    url: `https://api.glassfrog.com/api/v3/circles`,
    headers: {
    	'X-Auth-Token': process.env.MEETUP_TOKEN, 
    	'Content-Type': 'application/json'
    }
  };

  const response = await axios(config);
  res.send(JSON.stringify(response.data));
});

app.get("/meetup/photos", async (req, res) => {

  // query($eventId: ID!) {
  //   event(id: $eventId) {
  //     id
  //     images {
  //       id
  //       baseUrl
  //     }
  //   }
  // }
  
    const config = {
      method: "get",
      url: `https://api.glassfrog.com/api/v3/circles`,
      headers: {
        'X-Auth-Token': process.env.MEETUP_TOKEN, 
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
