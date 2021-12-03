
export const deciderAction=(url)=>{
    if(url==="http://localhost:8084/cat.gif")
      return {type:"CAT_READ"}
    else
      return {type:"QUOTE_READ"}
}