/*css*/
import './App.css';

/*pages*/
import Index from "./pages/index";
import Web from './pages/web';
import Login from './pages/login';
import Admin from './pages/admin';

/*React*/
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="web" element={<Web />}/>
          <Route path="Login" element={<Login />}/>
          <Route path="Admin" element={<Admin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
