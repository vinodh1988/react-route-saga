import { useContext } from "react";
import { Context } from "../Context/ContextAPI";

const MessageUnit=()=>{
    
    return (

        <div>
            <h3>Message</h3>
        <ul>
            <Context.Consumer>
                {x=><li>{x.message}</li>}
            </Context.Consumer>
        </ul>
        </div>
    )
}

export default MessageUnit;