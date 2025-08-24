import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("Mücahit");
  const [lastName, setLastName] = useState("Topçuoğlu");
  const [names, setNames] = useState(["Fatih", "Burak", "Mehmet"]);
  const [userInfo, setUserInfo] = useState({username:"mcht", password:"12345"});

  const [count, setCount] = useState(0);
  
  const arttir = () => {
    setCount(count + 1);
  }
 // const handleChange = (e) => {setFirstName(("Ahmet"))};

  return (
    <>
      <div>{firstName} {lastName}</div>
      <button onClick={() => setFirstName("Ahmet")}>First Name Degistir</button>
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
      <div>{userInfo.username} {userInfo.password}</div>

      <div>{count}</div>
      <button onClick={arttir}>Arttir</button>
    </>
  )
}

export default App
