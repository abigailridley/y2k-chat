import { Link } from 'react-router-dom';
import styled from 'styled-components';


const chats = [
    { id: 1, name: "CharliXCX" },
    { id: 2, name: "Daniel" }
];

const HomePage = () => (
    <Container>
        <Title>Chats</Title>
        <ChatList>
            {chats.map(chat => (
                <ChatLink key={chat.id} to={`/chat/${chat.id}`}>
                    {chat.name}
                </ChatLink>
            ))}
        </ChatList>
    </Container>
);

export default HomePage;

const Container = styled.div`
padding: 20px;
font-family: 'Courier New', Courier, monospace;
background-color:#f0e7db;
min-height: 100vh;
`;

const Title = styled.h1`
color: #000;
`;

const ChatList = styled.div`
display: flex;
flex-direction: column;
`;

const ChatLink = styled(Link)`
color: #000;
text-decoration: none;
font-size: 18px;
&:hover {
  text-decoration: underline;
}
`;
