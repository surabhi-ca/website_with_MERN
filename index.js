//D:\Surabhi\workspace\express-proj
const express=require ('express');
var bodyParser = require('body-parser');
const app= express();
var jsonParser = bodyParser.json();

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

//var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

// app.use(express.json);

// app.get('/api',(req,res)=>
// {

//     res.json({"menu": ["a","b","c"]});
// });

var obj;

const { v4: uuidv4 } = require('uuid');

// app.get('/api/order',(req,res)=>
// {
//   res.send(uuidv4());
// });

app.post('/api/order',jsonParser,(req,res)=>{
    //console.log(req.body);
    //res.send("apple");
       obj=req.body;
       //res.send(uuidv4());
  
   add_data(obj);
    
});

function add_data (item)
{
  MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo=db.db("cake_db");

  //  var myobj={name:"abc",age:"20"};
  dbo.collection("order_summary").insertOne(item,function(err,res){
      if(err) throw err;
      console.log("mongo document created");
      db.close();
  });
})}

// app.get('/api/order/:order_id',(req,res)=>
// {
//     res.send(req.params.order_id);
// });

// const port=process.env.PORT ;
const port=5000;
app.listen(port,()=>console.log(`hi port ${port}`));