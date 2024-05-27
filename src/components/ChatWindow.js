import { useParams } from "react-router-dom";
import styled from "styled-components";
import Message from './Message';
import AudioMessage from './AudioMessage'
import VideoMessage from './VideoMessage'

const messages = {
    1: [
        { type: 'text', content: "Happy birthday! Love A" },
        { type: 'audio', content: '/assets/audio/Message1.mp3'}
      
],
2: [
    {type: 'text', content: 'Its charli baby'}
]
};

const ChatWindow = () => {
    const { id } = useParams();
    const chatMessages = messages[id] || [];

    return (
        <Container>
            {chatMessages.map((msg, index) => (
                <MessageWrapper key={index}>
                    {msg.type === 'text' && <Message content={msg.content} />}
                    {msg.type === 'audio' && <AudioMessage src={msg.content} />}
                    {msg.type === 'video' && <VideoMessage src={msg.content} />}
                </MessageWrapper>
            ))}
        </Container>
    )
};

export default ChatWindow;

const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MessageWrapper = styled.div`
  margin-bottom: 10px;
`;