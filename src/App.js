import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Main } from './cmps/Main';
import './App.css'
export function App() {
    return <MemoryRouter>
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    </MemoryRouter>
}