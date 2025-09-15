import { Footer } from './layouts/footer/Footer'
import { HomePage } from './layouts/homepage/HomePage'
import { Navbar } from './layouts/header/Navbar'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './layouts/about/About';
import { CategoryDetail } from './layouts/category/CategoryDetail';
import { useParams } from 'react-router-dom';
import { BookDetail } from './layouts/product/BookDetail';

function App() {

  const [nameSearch, setNameSearch] = useState('');

  return (
    <>
      <BrowserRouter>
        <Navbar nameSearch={nameSearch} setNameSearch={setNameSearch} />
        <Routes>
          <Route path='/' element={<HomePage nameSearch={nameSearch} />} />
          <Route path='/category/:id' element={<HomePage nameSearch={nameSearch} />} />
          <Route path='/about' element={<About />} />
          <Route path='/sach/:bookId' element={<BookDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
