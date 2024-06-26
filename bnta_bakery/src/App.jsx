import { useState } from 'react';
import './App.css';
import CakeContainer from './assets/container/CakeContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>BNTA Bakery</h1>

   <CakeContainer />

   </>
  )
}

export default App
