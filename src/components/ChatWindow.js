import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import AudioMessage from './AudioMessage';
import VideoMessage from './VideoMessage';

// Import the audio file
import AbsAudio1 from '../assets/audio/abs-audio1.mp3'
import CharliAudio1 from '../assets/audio/charli-audio1.mp3'
import SamCamAudio1 from '../assets/audio/samcam-audio1.mp3'
import TimKeyAudio1 from '../assets/audio/timkey-audio1.mp3'

const messages = {
  1: [
    { type: 'text', content: "Happy birthday! Love Abs xxxx", timestamp: "11:05 30/06/2024" },
    { type: 'audio', content: AbsAudio1, timestamp: "11:07 30/06/2024" },
    { type: 'text', content: "Did you get my message?", timestamp: "11:09 30/06/2024" }
  ],
  2: [
    { type: 'text', content: 'Its charli baby', timestamp: "12:05 30/06/2024" },
    { type: 'audio', content: CharliAudio1, timestamp: "12:07 30/06/2024" }
  ],
  3: [
    { type: 'text', content: 'Mr Campbell informed me it is your birthday!', timestamp: "13:05 30/06/2024" },
    { type: 'audio', content: TimKeyAudio1, timestamp: "13:07 30/06/2024" }
  ],
  4: [
    { type: 'audio', content: SamCamAudio1, timestamp: "14:05 30/06/2024" },
    { type: 'text', content: '!!!!!!!!!!!!!!!!!', timestamp: "14:07 30/06/2024" }
  ]
};

const chatNames = {
  1: "Abs",
  2: "Charli",
  3: "Tim",
  4: "Sam",
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
            <MessageBlock key={index}>
               <ChatName>{chatName}</ChatName>
            <MessageWrapper>
              {msg.type === 'text' && <Message content={msg.content} />}
              {msg.type === 'audio' && <AudioMessage src={msg.content} />}
              {msg.type === 'video' && <VideoMessage src={msg.content} />}
              
            </MessageWrapper>
            <Timestamp>{`Message sent at ${msg.timestamp}`}</Timestamp>
            </MessageBlock>
            
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

const MessageBlock = styled.div`
  margin-bottom: 20px;
`;

const ChatName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  text-align: left;
  padding-left: 10px;
`;

const MessageWrapper = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
`;

const Timestamp = styled.div`
  font-size: 10px;
  color: #555;
  margin-top: 5px;
  text-align: right;
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

  &:hover {
    background-color: #0056b3;
  }
`;
