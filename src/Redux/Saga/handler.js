import axios from 'axios'
import {call,put} from 'redux-saga/effects'


export function* readQuotes(){
     const result=yield call(axios.get,"https://api.quotable.io/random")
     yield put({
         type:"QUOTE_ACTION",
         data:{message: result.data.content,by:result.data.author}
     })
}

export function* readCatFact(){
    const result=yield call(axios.get,"https://cat-fact.herokuapp.com/facts/random")
    yield put({
        type:"QUOTE_ACTION",
        data:{message: result.data.text,by:"Cat Quotes"}
    })
}