import ReactAudioPlayer from "react-audio-player";
import styled from 'styled-components'

const AudioMessage = ({ src }) => (
    <AudioWrapper>
        <ReactAudioPlayer src={src} controls />
    </AudioWrapper>
);

export default AudioMessage;


const AudioWrapper = styled.div`
  padding: 10px;
  background-color: #fff3cd;
  border-radius: 10px;
  max-width: 60%;
`;