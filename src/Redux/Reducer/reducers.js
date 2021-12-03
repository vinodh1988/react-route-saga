
export const messageReducer=(state={message:"Initial Message", by:"NA"},action)=>{
    switch(action.type){
          case "CAT_ACTION":case "QUOTE_ACTION":
              return {
                  message: action.data.message,
                  by: action.data.by
              }
          default:
              return state
    }
}