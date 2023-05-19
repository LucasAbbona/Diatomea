import ReactDOM from 'react-dom/client'
import './index.css'
import Footer from './components/Footer.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import QuienesSomos from './pages/QuienesSomos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/QuienesSomos' element={<QuienesSomos />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
