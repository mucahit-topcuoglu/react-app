import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [name, setName] = useState('');
  
  useEffect(()=>{console.log('her zaman çalıştı')},);
useEffect(()=>{console.log('sadece ilk renderde çalıştı')},[]);
  useEffect(()=>{console.log('name state i değişti')},[name]);

  return (
    <>
      <div><button onClick={() => setName('John')}>ismi değiştir</button></div>
    </>
  )
}

export default App
