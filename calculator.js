const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req,res){
    var num1= Number(req.body.n1);
    var num2= Number(req.body.n2);
    var result= num1 +num2;
    res.send("Your answer is " + result)
})


app.get("/BmiCalculator",function(req,res){
    res.sendFile(__dirname + "/BmiCalculator.html");
});

app.post("/BmiCalculator",function(req,res){
    var Weight= parseFloat(req.body.weight);
    var Heigth = parseFloat(req.body.height);
    var HeightCM=parseFloat(Heigth/100);
    var bmi= parseFloat(Weight / (HeightCM*HeightCM));
    res.send("Your BMI is "+ bmi)
});



app.listen(2000, function () {
    console.log("server is runing");
});