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

const chatNames = {
  1: "Abs" ,
 2: "Charli",
   3: "Daniel",
   4: "Wrestler",
   5: "Mum",
   6: "Mum2"
}

const ChatWindow = ({ chatId, closeChat }) => {
  const chatMessages = messages[chatId] || [];
  const chatName = chatNames[chatId] || "Chat";

  return (
    <Modal>
      <ModalContent>
        <TitleBar>
          <Title>{chatName} - Instant Message</Title>
          <CloseButton onClick={closeChat}>X</CloseButton>
        </TitleBar>
        <MessagesContainer>
          {chatMessages.map((msg, index) => (
            <MessageWrapper key={index}>
              {msg.type === 'text' && <Message content={msg.content} />}
              {msg.type === 'audio' && <AudioMessage src={msg.content} />}
              {msg.type === 'video' && <VideoMessage src={msg.content} />}
            </MessageWrapper>
          ))}
        </MessagesContainer>
        <ReplySection>
          <ReplyInput type="text"/>
          <SendButton>Send</SendButton>
        </ReplySection>
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
  background-color: #C0BFC0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00007F;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
`;

const Title = styled.div`
  flex: 1;
  text-align: center;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #C0BFC0;
  color: black;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }

`;

const MessagesContainer = styled.div`
  padding: 20px;
 
`;

const MessageWrapper = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
 
`;
const ReplySection = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
`;
const ReplyInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid black;
  font-size: 14px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 10px 15px;
  background-color: #C0BFC0;
  border: 1px solid black;
  cursor: pointer;
  shadow

  &:hover {
    background-color: #0056b3;
  }
`;

