// ChatList.js
import React from 'react';
import styled from 'styled-components';

const chats = [
  { id: 1, name: "Abs" },
  { id: 2, name: "Charli" },
  { id: 3, name: "Daniel" },
  { id: 4, name: "Wrestler" },
  { id: 5, name: "Mum" },
  { id: 6, name: "Mum2" },
];

const ChatList = ({ openChat }) => (
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
      <ChatItem key={chat.id} onClick={() => openChat(chat.id)}>
        {chat.name}
      </ChatItem>
    ))}
  </List>
  </Container>
);

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

`

const List = styled.div`
  padding: 20px;
  background-color: #C0BFC0;

`;

const ChatItem = styled.div`
  padding: 5px;
  margin: 5px 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
