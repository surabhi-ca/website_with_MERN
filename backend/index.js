const express=require ('express');
var bodyParser = require('body-parser');
const app= express();
var jsonParser = bodyParser.json();
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


var obj;

const { v4: uuidv4 } = require('uuid');


app.post('/api/order',jsonParser,(req,res)=>{
  obj=req.body;
  add_data(obj);
    
});

function add_data (item)
{
  MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo=db.db("cake_db");

  dbo.collection("order_summary").insertOne(item,function(err,res){
      if(err) throw err;
      console.log("mongo document created");
      db.close();
  });
})}

const port=5000;
app.listen(port,()=>console.log(`hi port ${port}`));
