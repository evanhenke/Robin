var holyblanks = require("./options.json").options;

module.exports = function(app,token){
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
        console.log(holyblanks.length);
        return Math.floor(Math.random() * holyblanks.length) + 1;
    }
}