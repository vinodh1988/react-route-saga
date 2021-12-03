import {takeEvery} from 'redux-saga/effects'
import { readCatFact, readQuotes } from './handler'

export function* rootSaga(){
    yield takeEvery("CAT_READ",readCatFact)
    yield takeEvery("QUOTE_READ",readQuotes)
}