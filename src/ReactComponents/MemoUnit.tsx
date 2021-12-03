import { useContext, useMemo, useState } from "react";
import { Context } from "../Context/ContextAPI";

const MemoUnit=()=>{
       const {message}=useContext(Context)
       const [x,setX]=useState(1)
       const result=useMemo(()=>"Random Message "+Math.round(Math.random()*10000),[message])
    
    return (

        <div>
            <h3>Message</h3>
        <ul>
             <li>{message}</li>
        </ul>
           <h3>{result}</h3>
           State: {x} 
           <button className="btn btn-primary"
            onClick={()=>setX(x=>x+1)}>changeState</button>
        </div>
    )
}

export default MemoUnit;