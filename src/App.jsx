import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './pages/Hero';
import About from './pages/About';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Contact from'./pages/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route element={<Layout />}>
            <Route path='/home' element={<Home />} />
            <Route path='/browse' element={<Browse />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <p className="copyright">
        Copyright - AniBlog All Rights Reserved 2025
      </p>
    </>
  )
}

export default App;
