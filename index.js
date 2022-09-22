const express = require("express");
// const  con = require("./config");
// const { body, validationResult } = require("express-validator");
// const bcrypt = require('bcrypt');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');



const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
// app.use(express.json());

app.get('/',(req,resp)=>resp.render('index'));

// app.post('/upload', (req, resp)=>{

// });


// app.get("/", (req, resp) => {
//   con.query("select * from user_data where deleted_at is null", (err, result) => {
//       console.log("result is :", result);
//       resp.send(result);
//     });
// });


// app.post("/checkEmail", (req, resp) => {
//   const email = req.body.email
//   con.query(`select * from user_data where email = ?`,[email],(err, result) => {
//     console.log("result is :", result);
//     if (!result?.length) {
//       console.log(result);
//       resp.status(200).json({message: 'Create User'})
//     } else {
//       resp.status(404).json({message: 'User Already Exsit'})
//     }
//     console.log("error is :", err);
//   }
// );
// });


// app.post(
//   "/signup",
//   [
//     body("first_name").isLength({ min: 5, max: 200 }).withMessage('must be at least 5 chars long'),
//     body("email").isEmail(),
//     body("password").isLength({ min: 5 }),
//     body("passwordConfirmation").custom((value, { req }) => {
//       if (value !== req.body.password) {
//         throw new Error("Password confirmation does not match password");
//       }
//       return true;
//     }),
//   ], async (req, resp) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return resp.status(400).json({ errors: errors.array() });
//     }
//     const salt = bcrypt.genSalt(10);
//     const secure_password = await (req.body.password, salt);

//     const data = {
//       first_name: req.body.first_name,
//       last_name: req.body.last_name,
//       email: req.body.email,
//       password: secure_password,
//     };

//   con.query(`select * from user_data where email = ?`,[data.email],(err, result) => {
//     console.log("result is :", result);
//     if (!result?.length) {
//       con.query("INSERT INTO user_data set ? ", data, (error, result) => {
//         if (error) error;
//         resp.send(result);
//       });
//     } else {
//       resp.status(404).json({message: 'User Already Exsit'})
//     }
//     console.log("error is :", err);
//   }
// );
    
//   }
// );

app.listen(7000);
