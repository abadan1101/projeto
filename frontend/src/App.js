import './App.css';

import { Outlet } from "react-router-dom"

import Navbar from './components/menuPrincipal/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>teste app</h1>
      <Outlet />
    </div>
  );
}

export default App;
