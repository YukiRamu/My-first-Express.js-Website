//import node module, express module and make an instance
const express = require("express");
const app = express();
require("dotenv").config();
const indexRouter = require("./routes/index"); //router
const dashboardRouter = require("./routes/dashboard");//router
const { auth } = require('express-openid-connect'); //auth0
const port = 3000;
const os = require("os");
const path = require("path");

//Auth0 config 
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER
};

//set view engine
app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(auth(config));

//function
const getPathData = () => {
  const pathData = {
    'basename': path.basename('./dir/test.txt'),
    'dirname': path.dirname('./dir/test.txt'),
    'extname': path.extname('./dir/test.txt'),
    'parse': path.parse('./dir/test.txt'),
    'join': path.join('dir', 'dir2', 'test.txt'),
    'relative': path.relative('./dir', './dir2/test.txt')
  };
  return pathData;
};

/* Routing configuration */
app.use("/", indexRouter);
app.use("/dashboard", dashboardRouter);

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});
