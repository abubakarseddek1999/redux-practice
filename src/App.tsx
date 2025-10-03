
// import { useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
// import type { RootState } from './redux/store';
import { useAppDispatch, useAppSelectior } from './redux/features/counter/hook';

function App() {
  // const [count, setCount] = useState(0)
  const dispatch = useAppDispatch();
  const handleIncrement = () => {
    dispatch(increment(5))
  }
  const handleDecrement = () => {
    dispatch(decrement(5))
  }
  // for show count use redux
  const count = useAppSelectior((state => state.counter.count))
  // console.log(count)


  return (
    <>
      <h1>Counter with Redux</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <h1>  {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>

      </div>
    </>
  )
}

export default App
