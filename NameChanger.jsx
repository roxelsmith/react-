import { useState } from "react"

export default function NameChanger(){
let [name, setName]=useState("like")

let changeName=()=>{
    setName("unlike")
}

    return (
        <div>
            <h1>Name Changer</h1>
            <h3>Name : {name}</h3>
            <button onClick={changeName}>Change</button>
        </div>
    )
}