import ImageSlider from "./slider";
import m1 from './menu1.jpg';
import m2 from './menu2.jpg';
import m3 from './menu3.jpg';
import { useRef } from "react";
import React, { useState } from "react";
 import axios from "axios";
 //import { useNavigate} from 'react-router-dom';
//  var bodyParser = require('body-parser');
//  var jsonParser = bodyParser.json();

import { Link, Routes,useNavigate } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route,Redirect,Navigate} from "react-router-dom";





const Ord = () => {


    
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      };

      const handleClick = async() => {
        setIsLoading(true);
        try {
          const {data} = await axios.post(
            'http://localhost:5000/api/order',
            {item_name:["strawberry dream","choco truffle","blue candy"],price:[299,250,275],total:{total},quantity:[{counter1},{counter2},{counter3}]}, 
            
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },);
          
            console.log(JSON.stringify(data, null, 4));
            setData(data);
          } catch (err) {
            setErr(err.message);
          } finally {
            setIsLoading(false);
          }
        };
      
        console.log(data);





const scrl=(elememtRef)=>{
    window.scrollTo({
      top:elememtRef.current.offsetTop, behavior:'smooth'
    })
  }
    
  const order = useRef(null);
  const menu = useRef(null);

  const shoot = (a) => {
    alert(a);}




const [counter1, setCounter1] = useState(0)
const [counter2, setCounter2] = useState(0)
const [counter3, setCounter3] = useState(0)


  const [total=0, setTotal] = useState(0)



  const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


let date2=`${current.getDate()+3}/${current.getMonth()+1}/${current.getFullYear()}`;


const Refresh=()=>{

  const navigate = useNavigate();
  navigate('/c_home');
}



const buttonfunc= ()=>{
  
  handleClick();
  // var id= response.data;
  // console.log(id);
  
  shoot("Your order is confirmed. Thank you for shopping with us!");
  //Refresh();
  

};




  return(
    <div>

 
   
   
    <div className="order_sec" ref={order}><h2 className="order-sec-title">Order your cake now</h2>

<button className="button button2" > Scroll to view menu!</button></div>

<div>



<div className="App">
      <header className="App-header">
        <h1 className="menu-head">------ Place your order ------</h1>
        
          <p >
          <ul className="menu-list">
            <li className="App-listhead">Strawberry dream</li>
            <li> <img src={m1} className="menu-img"></img></li>
            <li className="menu-dets">Rs 299</li>
            <li className="menu-dets">quantity {counter1}</li>
            <li>  <button className="App-button" onClick={() => {setCounter1(counter1 + 1);{setTotal(total+299);}}}>+</button></li>
          </ul>
          <ul className="menu-list">
            <li className="App-listhead">Choco truffle</li>
            <li><img src={m2} className="menu-img"></img></li>
            <li className="menu-dets">Rs 250</li>
            <li className="menu-dets">quantity {counter2}</li>
            <li><button className="App-button" onClick={() => {setCounter2(counter2 + 1);{setTotal(total+250);}}}>+</button></li>
          </ul>
          <ul className="menu-list">
            <li className="App-listhead">Blue candy</li>
            <li><img src={m3} className="menu-img"></img> </li>
            <li className="menu-dets">Rs 275</li>
            <li className="menu-dets">quantity {counter3}</li>
            <li><button className="App-button" onClick={() => {setCounter3(counter3 + 1);{setTotal(total+275);}}}>+</button></li>
          </ul>
        </p>
        <p className="total">Total Rs. {total}</p>
      
     
        {/* <p> {err && <h2>{err}</h2>} <button className="button button2" onClick={handleClick} onChange={handleChange} value={250}>Confirm order</button>   
        
      
        </p>
        <p><button className="button button2" onClick={() => shoot("Your order is confirmed. Thank you for shopping with us!")}>Proceed to checkout</button></p> */}
       <p><button className="button button2" onClick={buttonfunc}>Confirm order</button></p>
      </header>
    </div>


</div>

</div>
 );
}

export default Ord;
