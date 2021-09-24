const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

//activate sequelize
const db = require("./app/models");
db.sequelize.sync().then(()=>{
  console.log("sucessfully synced")
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mortgage application." });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});