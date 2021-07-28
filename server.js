//import node module, express module and make an instance
const express = require("express");
const app = express();
const port = 3000;
const os = require("os");
const chromelogger = require('chromelogger');
const { Server } = require("http");

//console.log on Chrome
app.use(chromelogger.middleware);

//function 
const getData = () => {
  const data = {
    "CPUArchitecture": os.arch(),
    "CPU": os.cpus(),
    "endianessOfCPU": os.endianness(),
    "freeMemory": os.freemem(),
    "totalMemory": os.totalmem(),
    "loadAverage": os.loadavg(),
    "networkInterface": os.networkInterfaces(),
    "platform": os.platform(),
    "releaseInfo": os.release(),
    "Type": os.type(),
    "userInfo": os.userInfo()
  };
  return data;
};

//set the engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //create data
  const data = getData();
  res.chrome.log(req);
  console.log(data);
  //rendering the page
  res.render("index", { data: data });
});

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});


// A. Fs module
// B. Path module
// C. Events
// D. Assert