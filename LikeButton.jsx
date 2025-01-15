import { useState } from "react"

export default function LikeButton(){
let [isLike , setLike]= useState(false) 
let [count , setCount]= useState(0);

let changeButton=()=>{
    setLike(!isLike);
    setCount(count +1)
}

    return (
        <div>
          
            <h3> Count :{count}</h3>
            <p onClick={changeButton} >
                {isLike ? (<i className="fa-solid fa-toggle-on" style={{color: "red"}}></i>):(<i className="fa-solid fa-toggle-off"></i>)}
            
            </p>
        
        </div>
    )
}