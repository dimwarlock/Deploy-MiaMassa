import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  RouterProvider as Route,
  Link
} from "react-router-dom";
import FrontPage from './pages/FrontPage'
import Administrador from './pages/Administrador';

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={FrontPage} />
        <Route exact path="/administrador" Component={Administrador} />
      </Routes>
    </Router>
  );
}

export default App;
