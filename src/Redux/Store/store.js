import {combineReducers,applyMiddleware,createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { deciderAction } from '../Action/DeciderAction'
import { messageReducer } from '../Reducer/reducers'
import { rootSaga } from '../Saga/root'

const appData = combineReducers({
    messageData: messageReducer
})

const sagaMiddleware=createSagaMiddleware()
export const store=createStore(appData,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export function invokeAction(url){
    store.dispatch(deciderAction(url))
}