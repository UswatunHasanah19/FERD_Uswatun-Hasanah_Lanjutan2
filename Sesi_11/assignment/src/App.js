import React, { useState, useEffect } from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <h1>Simulasi Antrian</h1>
    </header>
  )
}

function App() {
  const [value, setValue] = useState('');
  const [array, setArray] = useState([ ]);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  let antrikan = () => {
    let newArray = [...array]
    newArray.unshift(value)
    setArray(newArray)
  }

  let majukan = () => {
    let newArray = [...array]
    newArray.pop();
    setArray(newArray)
    //console.log(newArray);
  }
  
//console.log(array);
  return (
  <>
    <div className="App">
      <Header />
      <hr />
      <label>Masukkan Nama</label>
      <input  onChange={onChange} className="form-control" />
      <br />
      <button onClick={antrikan} >Antrikan !</button>
      <button onClick={majukan} >Majukan !</button>
      <hr />
      {
        (array.length==0) ? <p>[ Antrian Kosong ! ]</p> :
        array.map((arr, idx) => {
          let ini = idx === array.length - 1 ? '' : <span>=&gt;</span>
          return (
            <>
            <span className="nama">{array[idx]}</span>
            {ini}
            </>
          )
        })
      }
    </div>
  </>
  )
}

export default App;