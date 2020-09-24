import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import './App.css';

function App() {
  
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div className="App">
      <Cards 
        number={number}
        name={name}
        xpiry={expiry}
        focused={focus}
      />
      <form>
        <input 
          type='tel' 
          name='number' 
          placehoder='Card Number' 
          value={number} 
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input 
          type='text' 
          name='name' 
          placehoder='Name' 
          value={name} 
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
        <input 
          type='text' 
          name='expiry' 
          placehoder='MM/YY Expiry' 
          value={expiry} 
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}

export default App;
