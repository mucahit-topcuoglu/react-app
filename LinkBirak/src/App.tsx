import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import LinkList from './components/LinkList'
import AddLinkForm from './components/AddLinkForm'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="container">
      <Header />
      <main>
        <SearchBar />
        <AddLinkForm />
        
        <LinkList />
      </main>
    </div>
  )
}

export default App
