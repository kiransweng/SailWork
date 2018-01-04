const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.js');

var exec = require('child_process').exec;
var child;

var fs = require('fs');

var index=require('./routes/index');

const app = express();
const port = 3000;

app.set('views', __dirname + '/');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);

app.post('/', function(request, response){

      var firstName = request.body.firstName;
      var lastName = request.body.lastName;
      var email = request.body.email;

      child = exec("java utils.MyClass " + firstName + " " + lastName + " " + email, function (error, stdout, stderr) {
          if (error !== null) {
            console.log('exec error: ' + error);
          }
      });

      console.log(firstName + " " + lastName + " details are saved!!!");

      response.body = "<b>" + firstName + " " + lastName + "</b> details are saved!!!";
      response.write(response.body);
      response.write("<br><a href='/'>BACK</a>");
});

app.get('/userDetails', function(request,response){
  fs.readFile('data/users.txt', 'utf8', function(err, data) {
       if (err) throw err;
       else{
          var jsonObj = [];
          var records = data.split("|");
          for(var i = 0;i < records.length - 1;i++){

              var userDetails = records[i].split("-");
              var jsonVal = {
                  "firstName": userDetails[0],
                  "lastName": userDetails[1],
                  "email": userDetails[2]
              };
              jsonObj.push(jsonVal);
          }
          console.log("JSON Data:");
          console.log(jsonObj);

          response.render('userDetails.ejs', { usersInfo: jsonObj });
      }
   });
});

//start server
app.listen(port, config.ipAddress, () =>{
  console.log('Server started on http://' + config.ipAddress + ':' + port);
});
