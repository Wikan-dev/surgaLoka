import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kartu from './pages/Kartu.tsx';
import MainPages from './pages/MainPages.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kartu />} />
        <Route path="/mainPages" element={<MainPages />} />
      </Routes>
    </BrowserRouter> 
  )
}
