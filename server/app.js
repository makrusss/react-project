const express = require("express");
const app = express();
const PORT = process.env.PORT || 3004;
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>{
  res.send(`Hello World`)
})
app.use("/", router);

app.use(errorHandler);

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Listen to Port :", PORT);
});

