// ChatList.js
import React from 'react';
import styled from 'styled-components';

const chats = [
  { id: 1, name: "Abs" },
  { id: 2, name: "Charli" },
  // Add more chats as needed
];

const ChatList = ({ openChat }) => (
  <List>
    {chats.map(chat => (
      <ChatItem key={chat.id} onClick={() => openChat(chat.id)}>
        {chat.name}
      </ChatItem>
    ))}
  </List>
);

export default ChatList;

const List = styled.div`
  padding: 20px;
  background-color: #f1f1f1;
`;

const ChatItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;
