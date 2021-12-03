import { useContext, useState } from "react";
import { Context } from "../Context/ContextAPI";

const DataUnit=()=>{
    const {fruits,changeMessage}=useContext(Context)
    const [temp,setTemp]=useState("")

    return (

        <div>
            <h3>Fruits</h3>
        <ul>
            {fruits.map((x:string)=><li>{x}</li>)}
           
        </ul>
        <input type="text" value={temp} onChange={e=>{setTemp(e.target.value)}}/>
        <button onClick={()=>{changeMessage(temp)}}>addMessage</button>
        </div>
    )
}

export default DataUnit;