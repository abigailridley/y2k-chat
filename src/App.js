import React, { useState } from 'react';
import ChatList from './components/ChatList';
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
    <div>
      <ChatList openChat={openChat} />
      {openChatId !== null && <ChatWindow chatId={openChatId} closeChat={closeChat}/>}
    </div>
  )

}

export default App;
