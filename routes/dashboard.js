const express = require("express");
const router = express.Router();
const os = require("os");

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

// **** Path should be "/" = /dashboard
router.get("/", (req, res) => {
  const osData = getOsData();
  res.render("dashboard", {
    "title": "Express Dashboard",
    data: osData
  });
});

module.exports = router;