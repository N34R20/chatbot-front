import { ChatList, MessageList, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import React, { useState } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);


  const handleSendMessage = (text) => {
    const newMessage = {
      position: 'right',
      type: 'text',
      text: text,
      date: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
  <div>
    <ChatList
      className="chat-list"
      dataSource={[] /* Aquí puedes pasar una lista de usuarios o chats */}
    />
    <MessageList
      className="message-list"
      lockable={true}
      toBottomHeight={'100%'}
      dataSource={messages}
    />
    <Input
      placeholder="Escribe un mensaje..."
      multiline={true}
      onKeyPress={(e) => {
        if (e.shiftKey && e.charCode === 13) {
          return false;
        }
      }}
      value={inputValue}
      rightButtons={[
        <button key="send" onClick={(value) => handleSendMessage(value)}>
          Enviar
        </button>,
      ]}
    />
  </div>
);
};

export default ChatComponent;




/*
import React, { useState } from 'react';
import "../styles/chat.css"

const ChatSidebar = ({ chats, activeChat, setActiveChat, onNewChat }) => {
  return (
    <div className="sidebar">
      <button className="new-chat-button" onClick={onNewChat}>
        Nuevo Chat
      </button>
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`chat ${activeChat === index ? 'active' : ''}`}
            onClick={() => setActiveChat(index)}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatWindow = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="author">{message.author}</div>
            <div className="content">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Escribe un mensaje..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

const ChatComponent = () => {
  const [chats, setChats] = useState([
    { title: 'Chat 1', messages: [] },
    { title: 'Chat 2', messages: [] },
    { title: 'Chat 3', messages: [] },
  ]);
  const [activeChat, setActiveChat] = useState(null);

  const handleSendMessage = (message) => {
    const updatedChats = [...chats];
    updatedChats[activeChat].messages.push({
      author: 'Usuario',
      content: message,
    });
    setChats(updatedChats);
  };

  const handleNewChat = () => {
    const newChatTitle = `Chat ${chats.length + 1}`;
    const newChat = { title: newChatTitle, messages: [] };
    setChats([...chats, newChat]);
    setActiveChat(chats.length);
  };

  return (
    <div className="chat-container">
      <ChatSidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        onNewChat={handleNewChat}
      />
      {activeChat !== null && (
        <ChatWindow
          messages={chats[activeChat].messages}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default ChatComponent;*/