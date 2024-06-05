import styled from 'styled-components'

const Message = ({ content }) => (
    <TextMessage>
        {content}
    </TextMessage>
);

export default Message;

const TextMessage = styled.div`

`;