
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginReg from './components/pages/auth/LoginReg';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginReg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
