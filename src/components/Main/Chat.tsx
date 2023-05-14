import React from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import '../../styles/chat.css';
import api from '../../services/api';

type Props = {};

const Chat: React.FC<Props> = () => {
  const handleNewUserMessage = async (message: any) => {
    const response = await api.chat.response(message);
    addResponseMessage(response);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title={'AI Portfolio 🤖'}
      subtitle={'Ask anything about Adrian!'}
    />
  );
};

export default Chat;
