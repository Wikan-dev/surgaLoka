import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kartu from './pages/Kartu.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kartu />} />
      </Routes>
    </BrowserRouter> 
  )
}
