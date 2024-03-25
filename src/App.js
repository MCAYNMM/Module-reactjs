import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Detail from './Detail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
