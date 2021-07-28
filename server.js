//import node module, express module and make an instance
const express = require("express");
const app = express();
const port = 3000;
const os = require("os");
const path = require("path");

//function 
const getOsData = () => {
  const osData = {
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
  return osData;
};

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

/* Set the engine */
app.set("view engine", "ejs");

/* Routing configuration */
app.get("/", (req, res) => {
  //create data
  const osData = getOsData();
  console.log(osData);
  //rendering the page
  res.render("index", { data: osData });
});

app.get("/path", (req, res) => {
  const pathData = getPathData();
  console.log(pathData);
  res.render("path", { data: pathData });
});

app.listen(port, () => {
  console.log(`Application is running at http://localhost:${port}`);
});


// A. Fs module
// B. Path module
// C. Events
// D. Assert