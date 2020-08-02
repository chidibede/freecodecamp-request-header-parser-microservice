// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// whoami api
app.get('/api/whoami', (req, res) => {

  data = {
    "ipaddress": req.ip,
    "language": req.headers["accept-language"],
    "software": req.headers["user-agent"]
  }
  console.log(req.headers["user-agent"]);
  res.json(data)
})

const dev_port = 3005
// const prod_port = process.env.PORT
// listen for requests :)

var listener = app.listen(dev_port, function () {
  console.log(`Server listening on localhost:${dev_port}`);
});
