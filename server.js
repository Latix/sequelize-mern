const express = require("express");
const routes = require('./routes');
const cors = require("cors");
const app = express();


// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(bodyParser.urlencoded());

// app.use(bodyParser.json());
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
