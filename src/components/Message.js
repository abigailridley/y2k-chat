import styled from 'styled-components'

const Message = ({ content }) => (
    <TextMessage>
        {content}
    </TextMessage>
);

export default Message;

const TextMessage = styled.div`
padding: 10px;
background-color: #e1ffc7;
border-radius: 10px;
max-width: 60%;
`;