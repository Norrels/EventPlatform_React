import { Route, Routes } from 'react-router-dom'
import { Evento } from './pages/Evento';
import { Subscrible } from './pages/Subscribe';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Subscrible/>}/>
            <Route path='/event' element={<Evento/>}/>
            <Route path='/event/lessons/:slug' element={<Evento/>}/>
        </Routes>
    );
}