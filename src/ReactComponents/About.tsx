import { useState } from "react"
import { Context, reactStore} from "../Context/ContextAPI"
import DataUnit from "./DataUnit"
import MessageUnit from "./MessageUnit"


const About=()=>{
    const [message,setMessage]=useState(reactStore.message)
    return(
        <div className="mt-4 p-5 bg-success text-white rounded">
                <h1>Contextual Demo</h1>
                <Context.Provider value={{...reactStore,message: message, changeMessage: setMessage}} >
                        <DataUnit></DataUnit>
                        <MessageUnit></MessageUnit>
                </Context.Provider>
        </div>
    )
}

export default About