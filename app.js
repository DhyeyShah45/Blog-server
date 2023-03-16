const express = require("express");
const bodyParser = require("body-parser");
// const cors = require('cors')
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const CONNECTION = process.env.MONGO_URL;

// https://youtu.be/PNtFSVU-YTI - video reference for cors error
// app.use(cors({
//   origin:"http://localhost:3000",
// }))

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',userRoutes)
app.use('/',blogRoutes)

mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT || 8000, () => console.log(`running on port ${process.env.PORT || 8000}`)))
  .catch((err) => console.log(err));
