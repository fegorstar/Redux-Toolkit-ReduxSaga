import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import {getUser} from '../ducks/userSlice';

export function* watcherSaga() {
//connecting request to handlers

    yield takeLatest (getUser.type, handleGetUser); 
};