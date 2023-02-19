import React from "react";
import "../App.css";

function Header (props){
    return(
        <div className="header">
            
            <img className="headerImg" src={props.src}></img>
            <ul className="menu">
                <li><a href="sky/src/Header/Header#">{props.menu1}</a></li>
                <li><a href="sky/src/Header/Header#">{props.menu2}</a></li>
                <li><a href="sky/src/Header/Header#">{props.menu3}</a></li>
            </ul>
            <button className="header_button" onClick={props.onClick}>{props.btn}</button>
        </div>
    )
}
export default Header;