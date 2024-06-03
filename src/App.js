import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const [openChatId, setOpenChatId] = useState(null);

  const openChat = (chatId) => {
    setOpenChatId(chatId);
  };

  const closeChat = () => {
    setOpenChatId(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage openChat={openChat} />} />
        </Routes>
        {openChatId !== null && <ChatWindow chatId={openChatId} closeChat={closeChat} />}
    </Router>
        );
        };
      
export default App;
