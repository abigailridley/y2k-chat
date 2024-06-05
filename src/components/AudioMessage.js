import ReactAudioPlayer from "react-audio-player";
import styled from 'styled-components'

const AudioMessage = ({ src }) => (
    <AudioWrapper>
        <ReactAudioPlayer src={src} controls />
    </AudioWrapper>
);

export default AudioMessage;


const AudioWrapper = styled.div`
 
`;