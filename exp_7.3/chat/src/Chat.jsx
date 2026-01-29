// src/App.js
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // connect to backend

function Chat() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Receive messages from server
  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  const sendMessage = () => {
    if (message.trim() && username.trim()) {
      const data = {
        user: username,
        text: message,
        time: new Date().toLocaleTimeString(),
      };
      socket.emit("sendMessage", data);
      setMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Real-Time Chat</h2>

      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />

      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user}</strong> [{msg.time}]: {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={styles.messageInput}
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
  },
  input: {
    width: "90%",
    marginBottom: "10px",
    padding: "8px",
  },
  chatBox: {
    height: "200px",
    overflowY: "auto",
    border: "1px solid #ccc",
    marginBottom: "10px",
    padding: "8px",
    textAlign: "left",
  },
  messageInput: {
    flex: 1,
    padding: "8px",
  },
  button: {
    padding: "8px 16px",
    marginLeft: "5px",
  },
};

export default Chat;
