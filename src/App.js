import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatWindow from './components/ChatWindow'

function App() {
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/chat/:id' element={<ChatWindow />} />
      </Routes>
    </Router>
    
  );
}

export default App;
