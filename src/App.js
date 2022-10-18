
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginReg from './components/pages/LoginReg';
import Polls from './components/pages/auth/Polls';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import Result from './components/pages/Results';
import Registration from './components/pages/auth/Registration';
import Admin from './components/pages/admin/Signin';
import Panel from './components/pages/admin/AdminPanel';
import Poll from './components/pages/admin/Poll';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path= "login" element={<LoginReg />} />
            <Route path='result' element={<Result />} />
            <Route path = "dashboard" element={<Dashboard/>}/>
            <Route path = "polls" element={<Polls/>}/>
            <Route path = "reg" element={<Registration/>}/>
            <Route path ="admin" element={<Admin/>}/>
            <Route path ="panel" element={<Panel/>}/>
            <Route path ="poll" element={<Poll/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
