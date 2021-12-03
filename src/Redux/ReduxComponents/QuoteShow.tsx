const QuoteShow=({message,by}:any)=>{
   return(
       <div className="card" 
       style={{
       width:"500px",
       backgroundColor:"lightblue",
       margin:"30px",
       padding:"10px"}}>
         <h3>NOW!!!!! </h3>
         <p>
             {message}-{by}
        </p> 
       </div>
   )
}

export default QuoteShow