import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./store/actions";
function App(){
  const count = useSelector( state => state.count)
  const dispatch = useDispatch();
  return (
    <div className="app">
      <header>
        <div> {count} </div>
        <button> login </button>
      </header>
      <div className="counter">
        <button onClick={()=> dispatch(increment())}> + </button>
        <button onClick={()=> dispatch(increment(3))}> +3 </button>
        <button onClick={() => dispatch(decrement())}>  - </button>
      </div>
    </div>
  );
}





export default App;
