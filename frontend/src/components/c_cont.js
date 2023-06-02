import ImageSlider from "./slider";
import { useRef } from "react";
import ig from './ig_logo.jpg';
import ph from './call_logo.png';
import mail from './mail_logo.jpg';
import { Link, Routes,useNavigate } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route,Redirect,Navigate} from "react-router-dom";

const Cont = () => {


  const contact = useRef(null);
const scrl=(elememtRef)=>{
  window.scrollTo({
    top:elememtRef.current.offsetTop, behavior:'smooth'
  })
}
const slides = [
  { url: "http://localhost:3000/cake1.jpg"},
  { url: "http://localhost:3000/cake2.jpg" },
  { url: "http://localhost:3000/cake3.jpg" }

];
const containerStyles = {
width: "1200px",
height: "800px",
margin: 'auto',
position:'relative'

};

return(
<div>
<ul className="nav-ul">
  <br/>
<li onClick ={()=>scrl(contact)} className='nav-li'><a className="anch" href="#">Contact us</a></li>
<br/>
</ul>
<br/>

        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      
        
    
<div className="cont_sec" ref={contact}><h2 className="cont_title">Contact us!</h2>

<p >  <img className="ig" src={ig}></img>     @the_icing</p>
<p >  <img className="ig" src={ph}></img>    9980564782</p>
<p >  <img className="ig" src={mail}></img>    the_icing@gmail.com</p>
</div>

</div>
);}

export default Cont;

