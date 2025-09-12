import { Footer } from './layouts/footer/Footer'
import { HomePage } from './layouts/homepage/HomePage'
import { Navbar } from './layouts/header/Navbar'
import { useState } from 'react'

function App() {

  const [nameSearch, setNameSearch] = useState('');

  return (
    <>
      <Navbar nameSearch={nameSearch} setNameSearch={setNameSearch} />
      <HomePage nameSearch={nameSearch} />
      <Footer />
    </>
  )
}

export default App
