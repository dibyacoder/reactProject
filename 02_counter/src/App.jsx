import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setValue] = useState(0)
 const addValue = () => {
  if (value == 20){
    setValue(value = 20)
  }
  else{
    setValue(value+1)
    setValue(value+1)
    setValue(value+1)
    setValue(value+1)
    //Above 4 syntax wont run 4 times, It will be seen as a single task from a batch processes and increment will be done once only. To overcome this below
    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)
    setValue(prevCounter => prevCounter + 1)
    //We can implement it like this, where setValue() works like a call back function, fetches the previous value first then updates it.
  }
    
  }
  
  const removeValue = () => {
    if (value > 0){
      setValue(value - 1)
      //setValue(prevCounter => prevCounter -1)
    }
    else{
      setValue(value = 0)
    }
   
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {value}</h2>

      <button
      onClick={addValue}
      >Add value {value}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {value}</button>
      <p>footer: {value}</p>
    </>
  )
}

export default App
