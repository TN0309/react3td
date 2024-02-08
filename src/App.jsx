import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components//Header/Header';
import { useState } from 'react';

let arr = [];
function App() {
  const [val, setVal] =useState('')
  const [render, setRender] =useState(true)
  
  function fnAdd() {
     arr.push(val);
    setRender(!render);

  }

  return (
    <div className="App">
<h1>Mevalar</h1>
<input type="text" onChange={(e)=> setVal(e.target.value)} />
  <button onClick={fnAdd}>add</button>
  {
    arr.map((item, index)=>{
      return( <div className='box'>
         <p key = {index}>{item}</p>
      <h3>meva</h3> 
      </div>
      )
      
    })
  }
    </div>
  );
}

export default App;
