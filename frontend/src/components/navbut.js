
import { useRef } from "react";

import {BrowserRouter as Router,Switch,Route,Redirect,Navigate} from "react-router-dom";


import {Routes, useNavigate} from 'react-router-dom';

const Navbut=()=>{

     const navigate = useNavigate();

   
    return(
      <div>
        <ul className="nav-ul">
        <li className='nav-li' onClick ={()=>navigate('/c_home')} ><a className="anch" href="#">Home</a></li>
        <li onClick ={()=>navigate('/c_order')} className='nav-li'><a className="anch" href="#">Order</a></li>
        <li onClick ={()=>navigate('/c_cont')} className='nav-li'><a className="anch" href="#">Contact</a></li>
       
            </ul>
      </div>
    );
  }

  export default Navbut;