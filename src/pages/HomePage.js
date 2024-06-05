// HomePage.js
import React from 'react';
import styled from 'styled-components';
import ChatList from '../components/ChatList';
import bg from './img/windows-bg.jpeg'

const HomePage = ({ openChat }) => (
  <Container>
    <Background />
      <ChatList openChat={openChat} />
  </Container>
);

export default HomePage;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

font-family: monospace;
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


