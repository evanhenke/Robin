"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



var port = 3030;
//var token = "4nO1R34Ux4L2h1i9ge2xU4Kf";
var token = "LCqVPN3DKWUsU4phhrwCdjhF";
var oAuthToken = "xoxp-243600448048-245138256854-243604401616-f56512b3fabd56508772f0a4d1a7fbec";

//Content-Type: application/x-www-form-urlencoded
var holyblanks = require("./options.js").getSayings();

app.listen(process.env.PORT || port);

app.post("/holyblank",function(req,res){
    var name = "";
    console.log(req.body);
    if(req.body.text!==""){
        name = req.body.text;
    } else {
        name = "Batman";
    }
    if (req.body.token!==token){
        res.json({
            "error":"invalid token",
            "tokenGiven":req.body.token
        });
    } else {
        res.json({
            "response_type":"in_channel",
            "text": holyblanks[chooseBlank()] + ", " + name + "!"
        });
    }
});

var chooseBlank = function(){
    return Math.floor(Math.random() * holyblanks.length) + 1;
}