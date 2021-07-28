//import node module, express module and make an instance
const express = require("express");
const app = express();
const port = 3000;
const os = require("os");

//function 
const getData = () => {
  const data = {
    "CPUArchitecture": os.arch(),
    "CPU": os.cpus(),
    "endianessOfCPU": os.endianness()
  };
  return data;
};

//set the engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //create data
  const data = getData();
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