// // 


// const [showSettings, setShowSettings] = useState(false);
// const [showHelp, setShowHelp] = useState(false);
// const [darkMode, setDarkMode] = useState(false);


// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async () => {
//     if (!message.trim()) return;

//     const userMessage = message;

//     setMessages((prev) => [
//       ...prev,
//       {
//         text: userMessage,
//         sender: "user",
//       },
//     ]);

//     setMessage("");

//     try {
//       const response = await fetch("http://localhost:8080/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "text/plain",
//         },
//         body: userMessage,
//       });

//       const data = await response.text();

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: data,
//           sender: "bot",
//         },
//       ]);
//     } catch (error) {
//       console.error(error);

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, something went wrong.",
//           sender: "bot",
//         },
//       ]);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const newChat = () => {
//     setMessages([]);
//     setMessage("");
//   };

//   return (
//     <div className="app">

//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="sidebar-bottom">

//   <div
//     className="sidebar-link"
//     onClick={() => setShowSettings(true)}
//   >
//     ⚙ Settings
//   </div>

//   <div
//     className="sidebar-link"
//     onClick={() => setShowHelp(true)}
//   >
//     ? Help
//   </div>

// </div>
//         <div className="brand">
//           <div className="brand-icon">✦</div>
//           <span>Afzal AI</span>
//         </div>

//         <button className="new-chat" onClick={newChat}>
//           <span>＋</span>
//           New Chat
//         </button>

//         <div className="sidebar-section">
//           <p className="section-title">YOUR ASSISTANT</p>

//           <div className="assistant-card">
//             <div className="assistant-avatar">AI</div>

//             <div>
//               <strong>Afzal AI</strong>
//               <small>AI Assistant</small>
//             </div>

//             <span className="online-dot"></span>
//           </div>
//         </div>

//         <div className="sidebar-bottom">
//           <div className="sidebar-link">
//             ⚙ Settings
//           </div>

//           <div className="sidebar-link">
//             ? Help
//           </div>
//         </div>

//       </aside>

//       {/* Main */}
//       <main className="main">

//         {/* Topbar */}
//         <header className="topbar">
//           <div>
//             <h2>AI Assistant</h2>
//             <span>Ask me anything</span>
//           </div>

//           <div className="online-status">
//             <span></span>
//             Online
//           </div>
//         </header>

//         {/* Chat */}
//         <section className="chat-area">

//           {messages.length === 0 ? (

//             <div className="welcome">

//               <div className="welcome-logo">
//                 ✦
//               </div>

//               <h1>
//                 How can I help you?
//               </h1>

//               <p>
//                 Ask questions, learn something new,
//                 or get help with your work.
//               </p>

//               <div className="suggestions">

//                 <button
//                   onClick={() =>
//                     setMessage("Explain Java in simple words")
//                   }
//                 >
//                   <span>💻</span>
//                   <div>
//                     <strong>Learn Java</strong>
//                     <small>Explain Java simply</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("What is Data Analytics?")
//                   }
//                 >
//                   <span>📊</span>
//                   <div>
//                     <strong>Data Analytics</strong>
//                     <small>Understand analytics</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("Give me a project idea")
//                   }
//                 >
//                   <span>🚀</span>
//                   <div>
//                     <strong>Project Ideas</strong>
//                     <small>Get a new idea</small>
//                   </div>
//                 </button>

//               </div>

//             </div>

//           ) : (

//             <div className="messages">

//               {messages.map((msg, index) => (

//                 <div
//                   key={index}
//                   className={`message-row ${msg.sender}`}
//                 >

//                   <div className="avatar">
//                     {msg.sender === "user" ? "A" : "✦"}
//                   </div>

//                   <div className="message-content">

//                     <span className="sender-name">
//                       {msg.sender === "user"
//                         ? "You"
//                         : "Afzal AI"}
//                     </span>

//                     <div className="message">
//                       {msg.text}
//                     </div>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           )}

//         </section>

//         {/* Input */}
//         <div className="input-wrapper">

//           <div className="input-container">

//             <textarea
//               placeholder="Message Afzal AI..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               rows="1"
//             />

//             <button
//               className="send-button"
//               onClick={sendMessage}
//               disabled={!message.trim()}
//             >
//               ↑
//             </button>

//           </div>

//           <p className="disclaimer">
//             Afzal AI may make mistakes. Verify important information.
//           </p>

//         </div>

//       </main>

//     </div>
//   );
// }
// <div className={`app ${darkMode ? "dark-mode" : ""}`}></div>
// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showHelp, setShowHelp] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const sendMessage = async () => {
//   if (!message.trim() || isLoading) return;

//     const userMessage = message;

//     setMessages((prev) => [
//       ...prev,
//       {
//         text: userMessage,
//         sender: "user",
//       },
//     ]);

//     setMessage("");
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:8080/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "text/plain",
//         },
//         body: userMessage,
//       });

//       const data = await response.text();

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: data,
//           sender: "bot",
//         },
//       ]);
//     } catch (error) {
//       console.error(error);

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, something went wrong.",
//           sender: "bot",
//         },
//       ]);
//     }  finally {
//       setIsLoading(false);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const newChat = () => {
//     setMessages([]);
//     setMessage("");
//   };

//   return (
//     <div className={`app ${darkMode ? "dark-mode" : ""}`}>

//       {/* SIDEBAR */}
//       <aside className="sidebar">

//         <div className="brand">
//           <div className="brand-icon">✦</div>
//           <span>Afzal AI</span>
//         </div>

//         <button className="new-chat" onClick={newChat}>
//           <span>＋</span>
//           New Chat
//         </button>

//         <div className="sidebar-section">
//           <p className="section-title">YOUR ASSISTANT</p>

//           <div className="assistant-card">
//             <div className="assistant-avatar">AI</div>

//             <div>
//               <strong>Afzal AI</strong>
//               <small>AI Assistant</small>
//             </div>

//             <span className="online-dot"></span>
//           </div>
//         </div>

//         <div className="sidebar-bottom">

//           <div
//             className="sidebar-link"
//             onClick={() => setShowSettings(true)}
//           >
//             ⚙ Settings
//           </div>

//           <div
//             className="sidebar-link"
//             onClick={() => setShowHelp(true)}
//           >
//             ? Help
//           </div>

//         </div>

//       </aside>

//       {/* MAIN */}
//       <main className="main">

//         {/* TOPBAR */}
//         <header className="topbar">

//           <div>
//             <h2>AI Assistant</h2>
//             <span>Ask me anything</span>
//           </div>

//           <div className="online-status">
//             <span></span>
//             Online
//           </div>

//         </header>

//         {/* CHAT AREA */}
//         <section className="chat-area">

//           {messages.length === 0 ? (

//             <div className="welcome">

//               <div className="welcome-logo">
//                 ✦
//               </div>

//               <h1>How can I help you?</h1>

//               <p>
//                 Ask questions, learn something new,
//                 or get help with your work.
//               </p>

//               <div className="suggestions">

//                 <button
//                   onClick={() =>
//                     setMessage("Explain Java in simple words")
//                   }
//                 >
//                   <span>💻</span>

//                   <div>
//                     <strong>Learn Java</strong>
//                     <small>Explain Java simply</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("What is Data Analytics?")
//                   }
//                 >
//                   <span>📊</span>

//                   <div>
//                     <strong>Data Analytics</strong>
//                     <small>Understand analytics</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("Give me a project idea")
//                   }
//                 >
//                   <span>🚀</span>

//                   <div>
//                     <strong>Project Ideas</strong>
//                     <small>Get a new idea</small>
//                   </div>
//                 </button>

//               </div>

//             </div>

//           ) : (

//             <div className="messages">

//               {messages.map((msg, index) => (
//                   {isLoading && (
//                     <div className="message-row bot">
//                       <div className="avatar">✦</div>

//                       <div className="message-content">
//                         <span className="sender-name">Afzal AI</span>

//                         <div className="message typing">
//                           <span></span>
//                           <span></span>
//                           <span></span>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//         </section>

//         {/* INPUT */}
//         <div className="input-wrapper">

//           <div className="input-container">

//             <textarea
//               placeholder="Message Afzal AI..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               rows="1"
//             />

//             <button
//               className="send-button"
//               onClick={sendMessage}
//               disabled={!message.trim()}
//             >
//               ↑
//             </button>

//           </div>

//           <p className="disclaimer">
//             Afzal AI may make mistakes. Verify important information.
//           </p>

//         </div>

//       </main>

//       {/* SETTINGS MODAL */}
//       {showSettings && (
//         <div
//           className="modal-overlay"
//           onClick={() => setShowSettings(false)}
//         >

//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <div className="modal-header">

//               <h2>⚙ Settings</h2>

//               <button
//                 onClick={() => setShowSettings(false)}
//               >
//                 ✕
//               </button>

//             </div>

//             <div className="setting-item">

//               <div>
//                 <strong>Dark Mode</strong>
//                 <p>Change chatbot appearance</p>
//               </div>

//               <button
//                 className={`toggle ${
//                   darkMode ? "active" : ""
//                 }`}
//                 onClick={() => setDarkMode(!darkMode)}
//               >
//                 <span></span>
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//       {/* HELP MODAL */}
//       {showHelp && (
//         <div
//           className="modal-overlay"
//           onClick={() => setShowHelp(false)}
//         >

//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <div className="modal-header">

//               <h2>❓ Help</h2>

//               <button
//                 onClick={() => setShowHelp(false)}
//               >
//                 ✕
//               </button>

//             </div>

//             <div className="help-content">

//               <h3>How to use Afzal AI?</h3>

//               <p>
//                 1. Type your question in the message box.
//               </p>

//               <p>
//                 2. Press Enter or click the ↑ button.
//               </p>

//               <p>
//                 3. Afzal AI will generate a response.
//               </p>

//               <p>
//                 4. Click "New Chat" to start a fresh conversation.
//               </p>

//               <hr />

//               <p>
//                 <strong>Note:</strong> AI responses may
//                 sometimes contain incorrect information.
//               </p>

//             </div>

//           </div>

//         </div>
//       )}

//     </div>
//   );
// }

// export default App;




// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [showSettings, setShowSettings] = useState(false);
//   const [showHelp, setShowHelp] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!message.trim() || isLoading) return;

//     const userMessage = message;

//     // User message show karo
//     setMessages((prev) => [
//       ...prev,
//       {
//         text: userMessage,
//         sender: "user",
//       },
//     ]);

//     setMessage("");
//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:8080/api/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "text/plain",
//         },
//         body: userMessage,
//       });

//       if (!response.ok) {
//         throw new Error("Server error");
//       }

//       const data = await response.text();

//       // Bot ka answer
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: data,
//           sender: "bot",
//         },
//       ]);
//     } catch (error) {
//       console.error(error);

//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, something went wrong.",
//           sender: "bot",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   const newChat = () => {
//     setMessages([]);
//     setMessage("");
//     setIsLoading(false);
//   };

//   return (
//     <div className={`app ${darkMode ? "dark-mode" : ""}`}>

//       {/* SIDEBAR */}
//       <aside className="sidebar">

//         <div className="brand">
//           <div className="brand-icon">✦</div>
//           <span>Afzal AI</span>
//         </div>

//         <button className="new-chat" onClick={newChat}>
//           <span>＋</span>
//           New Chat
//         </button>

//         <div className="sidebar-section">
//           <p className="section-title">YOUR ASSISTANT</p>

//           <div className="assistant-card">
//             <div className="assistant-avatar">AI</div>

//             <div>
//               <strong>Afzal AI</strong>
//               <small>AI Assistant</small>
//             </div>

//             <span className="online-dot"></span>
//           </div>
//         </div>

//         <div className="sidebar-bottom">

//           <div
//             className="sidebar-link"
//             onClick={() => setShowSettings(true)}
//           >
//             ⚙ Settings
//           </div>

//           <div
//             className="sidebar-link"
//             onClick={() => setShowHelp(true)}
//           >
//             ? Help
//           </div>

//         </div>

//       </aside>

//       {/* MAIN */}
//       <main className="main">

//         {/* TOPBAR */}
//         <header className="topbar">

//           <div>
//             <h2>AI Assistant</h2>
//             <span>Ask me anything</span>
//           </div>

//           <div className="online-status">
//             <span></span>
//             Online
//           </div>

//         </header>

//         {/* CHAT AREA */}
//         <section className="chat-area">

//           {messages.length === 0 ? (

//             <div className="welcome">

//               <div className="welcome-logo">
//                 ✦
//               </div>

//               <h1>How can I help you?</h1>

//               <p>
//                 Ask questions, learn something new,
//                 or get help with your work.
//               </p>

//               <div className="suggestions">

//                 <button
//                   onClick={() =>
//                     setMessage("Explain Java in simple words")
//                   }
//                 >
//                   <span>💻</span>

//                   <div>
//                     <strong>Learn Java</strong>
//                     <small>Explain Java simply</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("What is Data Analytics?")
//                   }
//                 >
//                   <span>📊</span>

//                   <div>
//                     <strong>Data Analytics</strong>
//                     <small>Understand analytics</small>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() =>
//                     setMessage("Give me a project idea")
//                   }
//                 >
//                   <span>🚀</span>

//                   <div>
//                     <strong>Project Ideas</strong>
//                     <small>Get a new idea</small>
//                   </div>
//                 </button>

//               </div>

//             </div>

//           ) : (

//             <div className="messages">

//               {/* ALL MESSAGES */}
//               {messages.map((msg, index) => (

//                 <div
//                   key={index}
//                   className={`message-row ${msg.sender}`}
//                 >

//                   <div className="avatar">
//                     {msg.sender === "user" ? "A" : "✦"}
//                   </div>

//                   <div className="message-content">

//                     <span className="sender-name">
//                       {msg.sender === "user"
//                         ? "You"
//                         : "Afzal AI"}
//                     </span>

//                     <div className="message">
//                       {msg.text}
//                     </div>

//                   </div>

//                 </div>

//               ))}

//               {/* LOADING */}
//               {isLoading && (

//                 <div className="message-row bot">

//                   <div className="avatar">
//                     ✦
//                   </div>

//                   <div className="message-content">

//                     <span className="sender-name">
//                       Afzal AI
//                     </span>

//                     <div className="message typing">

//                       <span></span>
//                       <span></span>
//                       <span></span>

//                     </div>

//                   </div>

//                 </div>

//               )}

//             </div>

//           )}

//         </section>

//         {/* INPUT */}
//         <div className="input-wrapper">

//           <div className="input-container">

//             <textarea
//               placeholder="Message Afzal AI..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               rows="1"
//               disabled={isLoading}
//             />

//             <button
//               className="send-button"
//               onClick={sendMessage}
//               disabled={!message.trim() || isLoading}
//             >
//               ↑
//             </button>

//           </div>

//           <p className="disclaimer">
//             Afzal AI may make mistakes. Verify important information.
//           </p>

//         </div>

//       </main>

//       {/* SETTINGS MODAL */}
//       {showSettings && (

//         <div
//           className="modal-overlay"
//           onClick={() => setShowSettings(false)}
//         >

//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <div className="modal-header">

//               <h2>⚙ Settings</h2>

//               <button
//                 onClick={() => setShowSettings(false)}
//               >
//                 ✕
//               </button>

//             </div>

//             <div className="setting-item">

//               <div>
//                 <strong>Dark Mode</strong>
//                 <p>Change chatbot appearance</p>
//               </div>

//               <button
//                 className={`toggle ${
//                   darkMode ? "active" : ""
//                 }`}
//                 onClick={() => setDarkMode(!darkMode)}
//               >
//                 <span></span>
//               </button>

//             </div>

//           </div>

//         </div>

//       )}

//       {/* HELP MODAL */}
//       {showHelp && (

//         <div
//           className="modal-overlay"
//           onClick={() => setShowHelp(false)}
//         >

//           <div
//             className="modal"
//             onClick={(e) => e.stopPropagation()}
//           >

//             <div className="modal-header">

//               <h2>❓ Help</h2>

//               <button
//                 onClick={() => setShowHelp(false)}
//               >
//                 ✕
//               </button>

//             </div>

//             <div className="help-content">

//               <h3>How to use Afzal AI?</h3>

//               <p>
//                 1. Type your question in the message box.
//               </p>

//               <p>
//                 2. Press Enter or click the ↑ button.
//               </p>

//               <p>
//                 3. Afzal AI will generate a response.
//               </p>

//               <p>
//                 4. Click "New Chat" to start a fresh conversation.
//               </p>

//               <hr />

//               <p>
//                 <strong>Note:</strong> AI responses may
//                 sometimes contain incorrect information.
//               </p>

//             </div>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        text: userMessage,
        sender: "user",
      },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: userMessage,
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      if (!response.body) {
        throw new Error("No response body received");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let botResponse = "";

      // Create empty bot message
      setMessages((prev) => [
        ...prev,
        {
          text: "",
          sender: "bot",
        },
      ]);

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        const chunk = decoder.decode(value, {
          stream: true,
        });

        // Split SSE response into lines
        const lines = chunk.split("\n");

        for (const line of lines) {
          // Only process SSE data lines
          if (line.startsWith("data:")) {
            const text = line.substring(5);

            botResponse += text;

            // Update last bot message
            setMessages((prev) => {
              const updatedMessages = [...prev];

              if (
                updatedMessages.length > 0 &&
                updatedMessages[updatedMessages.length - 1].sender ===
                  "bot"
              ) {
                updatedMessages[updatedMessages.length - 1] = {
                  text: botResponse,
                  sender: "bot",
                };
              }

              return updatedMessages;
            });
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, something went wrong.",
          sender: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const newChat = () => {
    setMessages([]);
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <span>Afzal AI</span>
        </div>

        <button className="new-chat" onClick={newChat}>
          <span>＋</span>
          New Chat
        </button>

        <div className="sidebar-section">
          <p className="section-title">YOUR ASSISTANT</p>

          <div className="assistant-card">
            <div className="assistant-avatar">AI</div>

            <div>
              <strong>Afzal AI</strong>
              <small>AI Assistant</small>
            </div>

            <span className="online-dot"></span>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div
            className="sidebar-link"
            onClick={() => setShowSettings(true)}
          >
            ⚙ Settings
          </div>

          <div
            className="sidebar-link"
            onClick={() => setShowHelp(true)}
          >
            ? Help
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div>
            <h2>AI Assistant</h2>
            <span>Ask me anything</span>
          </div>

          <div className="online-status">
            <span></span>
            Online
          </div>
        </header>

        {/* CHAT AREA */}
        <section className="chat-area">
          {messages.length === 0 ? (
            <div className="welcome">
              <div className="welcome-logo">✦</div>

              <h1>How can I help you?</h1>

              <p>
                Ask questions, learn something new,
                or get help with your work.
              </p>

              <div className="suggestions">
                <button
                  onClick={() =>
                    setMessage("Explain Java in simple words")
                  }
                >
                  <span>💻</span>

                  <div>
                    <strong>Learn Java</strong>
                    <small>Explain Java simply</small>
                  </div>
                </button>

                <button
                  onClick={() =>
                    setMessage("What is Data Analytics?")
                  }
                >
                  <span>📊</span>

                  <div>
                    <strong>Data Analytics</strong>
                    <small>Understand analytics</small>
                  </div>
                </button>

                <button
                  onClick={() =>
                    setMessage("Give me a project idea")
                  }
                >
                  <span>🚀</span>

                  <div>
                    <strong>Project Ideas</strong>
                    <small>Get a new idea</small>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="messages">
              {/* ALL MESSAGES */}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message-row ${msg.sender}`}
                >
                  <div className="avatar">
                    {msg.sender === "user" ? "A" : "✦"}
                  </div>

                  <div className="message-content">
                    <span className="sender-name">
                      {msg.sender === "user"
                        ? "You"
                        : "Afzal AI"}
                    </span>

                    <div className="message">
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {/* LOADING */}
              {isLoading && (
                <div className="message-row bot">
                  <div className="avatar">✦</div>

                  <div className="message-content">
                    <span className="sender-name">
                      Afzal AI
                    </span>

                    <div className="message typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* INPUT */}
        <div className="input-wrapper">
          <div className="input-container">
            <textarea
              placeholder="Message Afzal AI..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              rows="1"
              disabled={isLoading}
            />

            <button
              className="send-button"
              onClick={sendMessage}
              disabled={!message.trim() || isLoading}
            >
              ↑
            </button>
          </div>

          <p className="disclaimer">
            Afzal AI may make mistakes. Verify important information.
          </p>
        </div>
      </main>

      {/* SETTINGS MODAL */}
      {showSettings && (
        <div
          className="modal-overlay"
          onClick={() => setShowSettings(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>⚙ Settings</h2>

              <button
                onClick={() => setShowSettings(false)}
              >
                ✕
              </button>
            </div>

            <div className="setting-item">
              <div>
                <strong>Dark Mode</strong>
                <p>Change chatbot appearance</p>
              </div>

              <button
                className={`toggle ${
                  darkMode ? "active" : ""
                }`}
                onClick={() => setDarkMode(!darkMode)}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HELP MODAL */}
      {showHelp && (
        <div
          className="modal-overlay"
          onClick={() => setShowHelp(false)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>❓ Help</h2>

              <button
                onClick={() => setShowHelp(false)}
              >
                ✕
              </button>
            </div>

            <div className="help-content">
              <h3>How to use Afzal AI?</h3>

              <p>
                1. Type your question in the message box.
              </p>

              <p>
                2. Press Enter or click the ↑ button.
              </p>

              <p>
                3. Afzal AI will generate a response.
              </p>

              <p>
                4. Click "New Chat" to start a fresh conversation.
              </p>

              <hr />

              <p>
                <strong>Note:</strong> AI responses may
                sometimes contain incorrect information.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;