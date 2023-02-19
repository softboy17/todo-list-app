import React from "react";

function Content(props){
    return(
        <div className="content">
             <h1>{props.title}</h1>
            <img className="content_img" src={props.src}></img>
            <p className="content_text">{props.text}</p>
            <p className="content_subtitle">{props.subtitle}</p>  
            
             
        </div>
    )
}
export default Content