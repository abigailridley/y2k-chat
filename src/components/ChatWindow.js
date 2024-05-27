import { useParams } from "react-router-dom";
import styled from "styled-components";
import Message from './Message';
import AudioMessage from './AudioMessage'
import VideoMessage from './VideoMessage'

const messages = {
    1: [
        { type: 'text', content: "Happy birthday! Love A" },
        { type: 'audio', content: '/assets/audio/Message1.m4a'}
],
2: [
    {type: 'text', content: 'Its charli baby'}
]
}