import { useEffect,useState } from 'react';
import './App.css'
import { useRef } from "react";
import ig from './ig_logo.jpg';
import ph from './call_logo.png';
import mail from './mail_logo.jpg';
import {BrowserRouter as Router,Routes,Route,Redirect,Navigate} from "react-router-dom";


import Cont from './components/c_cont';
import Home from './components/c_home';

import Title from './components/c_title';
import Ord from './components/c_order';

import Navbut from "./components/navbut";
function Appc() {



return (
	<Router>
	
        <Title/>
	<Navbut />
	<Routes>
		<Route path='/' element={<Home/>} />
		<Route path='/c_home' element={<Home/>} />
       
		
        <Route path='/c_order' element={<Ord/>} />
        <Route path='/c_cont' element={<Cont/>} />
       

		
	</Routes>
	</Router>
);
}

export default Appc;
