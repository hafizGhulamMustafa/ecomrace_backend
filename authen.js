// const http = require('http');
const express = require("express");
const app = express();
const con = require("./config");
const Validator = require('fastest-validator');

app.use(express.json());


app.get("/", (req, resp) => {
  con.query("select * from signup  where deleted_at is null", (err, result) => {
    console.log("result is :", result);
    resp.send(result);
  });
});

// const data = req.body;


app.post("/signup", (req, resp) => {

    
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    profile_pic: req.body.profile_pic,
    
  };
  const schema = {
    first_name: { type: "string", optional: false, max: "100" },
    last_name: { type: "string", optional: false, max: "100" , min: "3" },
    email: { type: "email"}
  };

  const v = new Validator();
  const check = v.compile(schema);
  
  const validationResponse = check(data);
  if (validationResponse != true) {
    return resp.status(200).json({
      message: "validation failed",
      error: validationResponse,
    });
  } 
  con.query("INSERT INTO signup set ?", data, (error, result) => {
    if (error) error;
    resp.send(result);
  });
});

app.listen(5000);

