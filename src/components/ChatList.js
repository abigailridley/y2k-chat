// ChatList.js
import React, { useState } from 'react';
import styled from 'styled-components';
// import AbsPP from '../assets/img//'
import CharliPP from '../assets/img/charli-pp.jpg'
import SamPP from '../assets/img/samcam-pp.jpg'
import TimPP from '../assets/img/timkey-pp.jpeg'

const chats = [
  { id: 1, name: "Abs", img: '../assets/img/abs-pp.jpg', unread: false },
  { id: 2, name: "Charli", img: CharliPP, unread: true},
  { id: 3, name: "Tim", img: TimPP, unread: true},
  { id: 4, name: "SamCam", img: SamPP, unread: true },
];


const ChatList = ({ openChat }) => {
const [selectedImage, setSelectedImage] = useState(null);
const [unreadMessages, setUnreadMessages] = useState(
  chats.reduce((acc, chat) => ({ ...acc, [chat.id]: chat.unread }), {})
);

const openImageModal = (img) => {
  setSelectedImage(img);
};

const closeImageModal = () => {
  setSelectedImage(null)
}

const handleChatClick = (chatId) => {
  openChat(chatId);
  setUnreadMessages((prev) => ({ ...prev, [chatId]: false}))
}

  return (
  <Container>
    <TitleBar>
    <Title>Instant Messenger</Title>
    <WindowButtons>
      <Button>_</Button>
      <Button>🗖</Button>
      <Button>X</Button>
    </WindowButtons>
    </TitleBar>
  <List>
    <ContactTitle>My contacts</ContactTitle>
    {chats.map(chat => (
      <ChatItem key={chat.id} onClick={() => handleChatClick(chat.id)}>
        <ProfilePic src={chat.img} alt='' onClick={(e) =>{ e.stopPropagation(); openImageModal(chat.img); }}/>
        <ChatName>{chat.name}</ChatName>
        {unreadMessages[chat.id] && <NewMessageIndicator>New Message</NewMessageIndicator>}
      </ChatItem>
    ))}
  </List>
  {selectedImage && (
    <ImageModal onClick={closeImageModal}>
      <ModalContent>
        <ModalImage src={selectedImage} alt="Profile" />
      </ModalContent>
    </ImageModal>
  )}
  </Container>
);
}

export default ChatList;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 70%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for the chat list */

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00007F;
  color: white;
  padding: 5px 10px;
  font-family: 'Arial', sans-serif;
  font-size: 14px;
`;
const Title = styled.div`
flex: 1;
text-align: center;

`
const WindowButtons = styled.div`
  display: flex;
`;

const Button = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
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

const ContactTitle = styled.div`
font-weight: bold;
  margin-bottom: 10px;
`

const List = styled.div`
  padding: 20px;
  background-color: #C0BFC0;

`;

const ChatItem = styled.div`
display: flex;
align-items: center;
padding: 5px;
margin: 5px 0;
background-color: #ffffff;
border: 1px solid #ddd;
cursor: pointer;

&:hover {
  background-color: #eee;
}
  }
`;
const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;

const ChatName = styled.div`
  flex: 1;
  font-weight: bold;
`;
const NewMessageIndicator = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 12px;
  color: #007bff;
`;

const ImageModal = styled.div`
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
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;