import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatWindow from './components/ChatWindow'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path='/chat/:id' component={ChatWindow} />
      </Routes>
    </Router>
  );
}

export default App;
