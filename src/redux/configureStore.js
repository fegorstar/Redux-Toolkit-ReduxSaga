import{combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./saga/rootSaga";
import userSlice from './ducks/userSlice';
//import your reducers here
const reducer = combineReducers({
counter: counterSlice,
user: userSlice
});

const sagaMiddleware= createSagaMiddleware();

//create store and pass in your reducer and setting up the middleware to be used
const store= configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;
