
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginReg from './components/pages/LoginReg';
import Polls from './components/pages/auth/Polls';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path= "login" element={<LoginReg />} />
            <Route path = "dashboard" element={<Dashboard/>}/>
            <Route path = "polls" element={<Polls/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
