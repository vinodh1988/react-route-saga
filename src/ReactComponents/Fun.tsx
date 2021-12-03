
import { useEffect,useState } from "react"
import QuoteShowHOC from "../Redux/HOC/QuoteShowHOC"
import { invokeAction } from "../Redux/Store/store"


const Fun=()=>{
    const [url,setUrl]=useState("http://localhost:8084/cat.gif")

    useEffect(
        ()=>{
    let timeout=setInterval(()=>{

        setUrl(url=>
            
             url==='http://localhost:8084/cat.gif'
            ?"http://localhost:8084/quote.jpg":'http://localhost:8084/cat.gif'
         )
        },2000)
        return ()=>{clearInterval(timeout)}
    },[])


    return(
    <div className="card">
        <div className="card" style={{width:"400px",cursor: "pointer"}} 
        onClick={()=>{invokeAction(url)}}>
             <img src={url} style={{height:"250px", width: "100%"}} alt="noimage" />
             
             <h3>Click cat for cat facts and man for Quotes</h3>
        </div>
         <QuoteShowHOC></QuoteShowHOC>
    </div>
    )
}

export default Fun