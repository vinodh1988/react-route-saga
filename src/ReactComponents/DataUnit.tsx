import { useContext } from "react";
import { Context } from "../Context/ContextAPI";

const DataUnit=()=>{
    const {fruits}=useContext(Context)
    return (

        <div>
            <h3>Fruits</h3>
        <ul>
            {fruits.map((x:string)=><li>{x}</li>)}
        </ul>
        </div>
    )
}

export default DataUnit;