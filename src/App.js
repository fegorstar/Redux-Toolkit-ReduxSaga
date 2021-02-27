import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, test } from './redux/counterSlice';
import { getUser } from './redux/ducks/userSlice';


function App() {
   //using redux store
   const  {count} =useSelector(state => state.counter);
//create the dispatch function
const dispatch = useDispatch();
    
const handleIncrememt = () => {
    dispatch(increment());
};
const handleDecrememt = () => {
    dispatch(decrement());
   };

   useEffect(() => {
    dispatch(getUser());
 }, [dispatch]);

//getting a redux variable from the redux store
const user =useSelector(state => state.user);
console.log(user);
  return (
    <div className="App">
       <h1>The Counter is: {count}</h1>

       {user && <h1>hi, welcome {user.firstname}</h1>}
       
 <button onClick={handleIncrememt}>Increment</button>
<button onClick={handleDecrememt}>Decrement</button>
<button onClick={()=> dispatch(test({testValue:23}))}>Test</button>
    </div>
  );
}

export default App;
