import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import DetalhesWrapper from './detalhesWrapper';
import Error from './pages/error';
import Cadastro from './pages/cadastro';

export default function RoutesConfig() {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detalhes/:id' element={<DetalhesWrapper />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='error' element={<Error />} />
        <Route path='*' element={<Error />} />
      </Routes>
    );
}