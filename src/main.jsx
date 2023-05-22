import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import QuienesSomos from './pages/QuienesSomos.jsx'
import Faq from './pages/FAQ'
import Servicios from './pages/Servicios'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/QuienesSomos' element={<QuienesSomos />} />
      <Route path='/FAQ' element={<Faq />} />
      <Route path='/Servicios' element={<Servicios />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
