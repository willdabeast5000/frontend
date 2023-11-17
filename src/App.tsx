import * as React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/"  element={<Layout />}>
            <Route index path="/home" element={<Home />} />
            <Route index path="/admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
