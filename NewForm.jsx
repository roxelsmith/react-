import { useState } from "react"

export default function NewForm(){
let [formData, setFormData] = useState({
    userName:  "",
    remarks:  "",
    rating: 5

})

let handleInputChange=(event)=>{
    setFormData((currData)=>{
        return{...currData, [event.target.name]: event.target.value}
    })
}

let handleSubmit=(event)=>{
    
    console.log(formData);
    event.preventDefault();
    
    setFormData({
        userName:  "",
    remarks:  "",
    rating: 5
    })
    
}
    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="userName" 
                value={formData.userName}
                name="userName"
                onChange={handleInputChange}
                />
                <br /> <br /> 
                <textarea  placeholder="add few remarks" 
                value={formData.remarks}
                name="remarks"
                onChange={handleInputChange}>
                    Remarks</textarea>
                <br /> <br /> 
                <input type="number" 
                placeholder="rating" min={1} max={5}
                  value={formData.rating}
                  name="rating" 
                  onChange={handleInputChange}/>
                <br /> <br /> 
                <button>Add Comment</button>
            </form>
        </div>
    )
}