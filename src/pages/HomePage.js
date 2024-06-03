// HomePage.js
import React from 'react';
import styled from 'styled-components';
import ChatList from '../components/ChatList';
import bg from './img/windows-bg.jpeg'

const HomePage = ({ openChat }) => (
  <Container>
    <Background />
    <Content>
      <ChatList openChat={openChat} />
    </Content>
  </Container>
);

export default HomePage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center center fixed;
  background-size: contain;
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for the chat list */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
