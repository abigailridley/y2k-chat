// ChatWindow.js
import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import AudioMessage from './AudioMessage';
import VideoMessage from './VideoMessage';

// Import the audio file
import Message1Audio from '../assets/audio/Message1.mp3';

const messages = {
  1: [
    { type: 'text', content: "Happy birthday! Love A" },
    { type: 'audio', content: Message1Audio },
    { type: 'text', content: "Did you get my message?" }
  ],
  2: [
    { type: 'text', content: 'Its charli baby' }
  ]
};

const ChatWindow = ({ chatId, closeChat }) => {
  const chatMessages = messages[chatId] || [];

  return (
    <Modal>
      <ModalContent>
        <CloseButton onClick={closeChat}>X</CloseButton>
        {chatMessages.map((msg, index) => (
          <MessageWrapper key={index}>
            {msg.type === 'text' && <Message content={msg.content} />}
            {msg.type === 'audio' && <AudioMessage src={msg.content} />}
            {msg.type === 'video' && <VideoMessage src={msg.content} />}
          </MessageWrapper>
        ))}
      </ModalContent>
    </Modal>
  );
};

export default ChatWindow;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const MessageWrapper = styled.div`
  margin-bottom: 10px;
`;
