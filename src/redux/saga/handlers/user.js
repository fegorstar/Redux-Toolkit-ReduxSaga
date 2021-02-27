import {call, put} from "redux-saga/effects";
import { setUser } from "../../ducks/userSlice";
import { requestGetUser } from "../requests/user";


export function* handleGetUser(action) {
    //wrap of call in a try/catch
    try{
        const response = yield call(requestGetUser);
        //data coming back =to the response
        const {data}= response;
        //storing the data inside our reducer
        yield put(setUser({...data}));

    }catch(error){
console.log(error);
    }
   


}