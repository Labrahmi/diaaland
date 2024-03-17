import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import En from './pages/en/page'
import Fr from './pages/fr/page'
import Ar from './pages/ar/page'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<En />} />
        <Route path="/fr" element={<Fr />} />
        <Route path="/ar" element={<Ar />} />
        <Route path="/*" element={<Navigate to="/en" replace />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App