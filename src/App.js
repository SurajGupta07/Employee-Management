import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Employees from './components/Employees'
import {Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={< Employees />}/>
            <Route path="/create" element={< App />}/>
          </Routes>
        </div>
    );
}

export default App;
