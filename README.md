# 🤖 Afzal AI - AI Chatbot

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot-4-brightgreen?style=for-the-badge&logo=springboot&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenRouter-API-black?style=for-the-badge" />
</p>

<p align="center">
  <strong>A modern full-stack AI chatbot built with React, Vite, Spring Boot and OpenRouter API.</strong>
</p>

---

## 📌 About The Project

**Afzal AI** is a full-stack AI chatbot application that allows users to communicate with an AI assistant through a modern and responsive web interface.

The application is built using **React + Vite** for the frontend and **Java + Spring Boot** for the backend.

The backend communicates with the **OpenRouter API** to generate AI-powered responses.

### Main Technologies

- React.js
- Vite
- Java 21
- Spring Boot
- REST API
- OpenRouter API
- JSON
- Server-Sent Events
- HTML5
- CSS3
- JavaScript

---

# ✨ Features

- 🤖 AI-powered chatbot
- 💬 Real-time conversation
- ⚡ Fast AI responses
- 🎨 Modern and responsive UI
- 🌙 Dark Mode
- 🆕 New Chat functionality
- ⚙️ Settings panel
- ❓ Built-in Help section
- 💻 Programming assistance
- 📊 Data Analytics questions
- 🚀 Project idea generation
- 🔐 Environment variable based API key
- 🔗 React frontend + Spring Boot backend
- 📡 REST API communication
- 🛡️ API key is not exposed in frontend

---

# 🛠️ Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React.js | User Interface |
| Vite | Frontend development/build tool |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling |

## Backend

| Technology | Purpose |
|------------|---------|
| Java 21 | Backend programming |
| Spring Boot | Backend framework |
| Spring Web | REST API |
| Maven | Dependency management |
| JSON | API request/response handling |

## AI

| Technology | Purpose |
|------------|---------|
| OpenRouter | AI API provider |
| GPT OSS 20B | AI model |

---

# 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │        USER          │
                    │      Browser         │
                    └──────────┬───────────┘
                               │
                               │ HTTP Request
                               ▼
                    ┌──────────────────────┐
                    │    React + Vite      │
                    │      Frontend        │
                    │      Port 5173       │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │     Spring Boot      │
                    │       Backend        │
                    │      Port 8080       │
                    └──────────┬───────────┘
                               │
                               │ HTTPS API
                               ▼
                    ┌──────────────────────┐
                    │     OpenRouter       │
                    │        API           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      AI Model        │
                    │    GPT OSS 20B       │
                    └──────────────────────┘
```

---

# 📂 Project Structure

```text
Ai-Chatbot/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── afzal/
│   │   │   │           └── aichatbot/
│   │   │   │               │
│   │   │   │               ├── controller/
│   │   │   │               │   └── ChatController.java
│   │   │   │               │
│   │   │   │               ├── service/
│   │   │   │               │   └── ChatService.java
│   │   │   │               │
│   │   │   │               └── AichatbotApplication.java
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   └── test/
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── README.md
```

---

# 💻 Requirements

Before installing the project, make sure the following software is installed.

### Required

- Java JDK 21+
- Node.js 18+
- npm
- Git
- OpenRouter API Key

### Check Java

```bash
java -version
```

### Check Node.js

```bash
node -v
```

### Check npm

```bash
npm -v
```

### Check Git

```bash
git --version
```

---

# 🔑 OpenRouter API Key

This project uses an OpenRouter API key for AI responses.

Create an API key from your OpenRouter account.

After creating the key, store it as an environment variable.

## Windows PowerShell

```powershell
$env:OPENROUTER_API_KEY="YOUR_API_KEY"
```

Verify it:

```powershell
echo $env:OPENROUTER_API_KEY
```

If the key is displayed, the environment variable is configured for the current PowerShell session.

> ⚠️ Never upload your API key to GitHub.

---

# 📥 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/iamafzal-06/Ai-Chatbot.git
```

Move into the project:

```bash
cd Ai-Chatbot
```

---

# 🎨 Frontend Setup

Open a terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The Vite development server will normally run on:

```text
http://localhost:5173
```

---

# ☕ Backend Setup

Open another terminal.

Go to the backend folder:

```bash
cd backend
```

Set your OpenRouter API key.

### Windows PowerShell

```powershell
$env:OPENROUTER_API_KEY="YOUR_API_KEY"
```

Start the Spring Boot backend:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend will normally run on:

```text
http://localhost:8080
```

---

# ▶️ How To Use

After starting both frontend and backend:

### Step 1

Open the frontend in your browser:

```text
http://localhost:5173
```

### Step 2

You will see the **Afzal AI** chatbot interface.

### Step 3

Enter your question in the message box.

Example:

```text
What is Data Analytics?
```

### Step 4

Press:

```text
Enter
```

or click the send button.

### Step 5

The frontend sends your message to:

```text
POST http://localhost:8080/api/chat
```

The Spring Boot backend sends the request to OpenRouter.

The AI response is then displayed in the chatbot.

---

# 💬 Example Questions

You can ask questions like:

```text
What is Java?

Explain OOP in Java.

What is Spring Boot?

What is Data Analytics?

Explain SQL JOINs.

Give me a Java project idea.

Explain REST API.

What is React?

How does Spring Boot work?

Give me interview questions for Java.
```

---

# 🔌 API Documentation

## Chat API

### Endpoint

```text
POST /api/chat
```

### Full URL

```text
http://localhost:8080/api/chat
```

### Request Header

```text
Content-Type: text/plain
```

### Request Body

```text
What is Data Analytics?
```

### Example Request

```http
POST /api/chat
Content-Type: text/plain

What is Data Analytics?
```

### Response

The API returns the AI-generated response.

---

# 🔄 Application Flow

```text
User
  │
  ▼
React Frontend
  │
  │ POST /api/chat
  ▼
Spring Boot Controller
  │
  ▼
ChatService
  │
  │ HTTPS Request
  ▼
OpenRouter API
  │
  ▼
AI Model
  │
  ▼
AI Response
  │
  ▼
Spring Boot
  │
  ▼
React Frontend
  │
  ▼
User
```

---

# 🤖 OpenRouter Integration

The backend communicates with OpenRouter using:

```text
https://openrouter.ai/api/v1/chat/completions
```

The model configured in the application is:

```text
openai/gpt-oss-20b:free
```

The backend sends a request similar to:

```json
{
  "model": "openai/gpt-oss-20b:free",
  "messages": [
    {
      "role": "user",
      "content": "What is Data Analytics?"
    }
  ]
}
```

---

# 🔐 Environment Variable

The backend reads the API key using:

```java
System.getenv("OPENROUTER_API_KEY");
```

This keeps the API key outside the source code.

### Do NOT do this:

```java
private final String apiKey = "YOUR_SECRET_API_KEY";
```

### Instead:

```java
private final String apiKey =
        System.getenv("OPENROUTER_API_KEY");
```

---

# 🎨 User Interface

The application contains:

### Sidebar

- Afzal AI branding
- New Chat
- AI Assistant information
- Settings
- Help

### Chat Area

- Welcome screen
- Suggested questions
- User messages
- AI responses
- Loading animation

### Settings

- Dark Mode

### Help

- Instructions for using the chatbot

---

# 🌙 Dark Mode

Afzal AI includes a Dark Mode option.

Users can open:

```text
Settings → Dark Mode
```

and switch between light and dark appearance.

---

# 🆕 New Chat

The **New Chat** button clears the current conversation and allows the user to start a new conversation.

---

# ❓ Help

The Help section explains:

1. How to enter a question
2. How to send a message
3. How to receive an AI response
4. How to start a new chat

---

# 🧪 Testing

The backend can be tested through the frontend or any API testing tool such as Postman.

Example endpoint:

```text
POST http://localhost:8080/api/chat
```

Header:

```text
Content-Type: text/plain
```

Body:

```text
Explain Java OOP.
```

---

# 🐛 Troubleshooting

## Problem: `OPENROUTER_API_KEY` is empty

Check:

```powershell
echo $env:OPENROUTER_API_KEY
```

If nothing is displayed, set the key again:

```powershell
$env:OPENROUTER_API_KEY="YOUR_API_KEY"
```

Then restart the Spring Boot application.

---

## Problem: Frontend cannot connect to backend

Make sure the backend is running on:

```text
http://localhost:8080
```

and frontend is running on:

```text
http://localhost:5173
```

---

## Problem: `npm install` fails

Try:

```bash
npm cache clean --force
```

Then:

```bash
npm install
```

---

## Problem: Port 8080 already in use

Stop the previous Spring Boot application or change the backend port in:

```text
backend/src/main/resources/application.properties
```

Example:

```properties
server.port=8081
```

If you change the backend port, also update the frontend API URL.

---

## Problem: AI API returns an error

Check:

- OpenRouter API key
- Model availability
- Internet connection
- API usage limits
- Backend console logs

---

# 📸 Screenshots

Add your screenshots inside a `screenshots` folder.

Recommended structure:

```text
screenshots/
├── home.png
├── chat.png
├── dark-mode.png
└── help.png
```

Then add them to this README.

### Home

![Afzal AI Home](screenshots/home.png)

### Chat

![Afzal AI Chat](screenshots/chat.png)

### Dark Mode

![Afzal AI Dark Mode](screenshots/dark-mode.png)

---

# 🚀 Deployment

The project contains two separate applications:

```text
Frontend → React + Vite
Backend  → Spring Boot
```

Therefore, the frontend and backend should be deployed separately.

### Frontend

The React/Vite frontend can be deployed on platforms such as:

- Vercel
- Netlify

### Backend

The Spring Boot backend can be deployed on platforms that support Java applications, such as:

- Render
- Railway
- VPS
- AWS
- Other Java hosting platforms

After deploying the backend, update the frontend API URL:

```javascript
fetch("YOUR_BACKEND_URL/api/chat", {
```

instead of:

```javascript
fetch("http://localhost:8080/api/chat", {
```

---

# 🔒 Security Notes

For production deployment:

- Never expose the OpenRouter API key in React.
- Keep the API key only on the backend.
- Use environment variables.
- Configure CORS for the production frontend domain.
- Do not commit `.env` or secret files.
- Rotate the API key if it is accidentally exposed.

---

# 📈 Future Improvements

The following features can be added in future versions:

- [ ] User authentication
- [ ] Login and registration
- [ ] Chat history
- [ ] Database integration
- [ ] Multiple AI models
- [ ] File upload
- [ ] Image understanding
- [ ] Voice input
- [ ] Voice output
- [ ] Markdown rendering
- [ ] Code syntax highlighting
- [ ] Conversation search
- [ ] Delete conversations
- [ ] User profiles
- [ ] Admin dashboard
- [ ] Mobile application
- [ ] Production deployment
- [ ] Improved streaming UI

---

# 📚 Learning Outcomes

This project helped demonstrate practical knowledge of:

- React.js
- Vite
- JavaScript
- Java
- Spring Boot
- REST APIs
- HTTP requests
- JSON
- API integration
- OpenRouter integration
- Environment variables
- Frontend-backend communication
- CORS
- Server-Sent Events
- Responsive UI
- Git and GitHub

---

# 📊 Project Highlights

| Category | Technology |
|----------|------------|
| Frontend | React.js |
| Build Tool | Vite |
| Backend | Spring Boot |
| Language | Java 21 |
| API | REST API |
| AI Provider | OpenRouter |
| AI Model | GPT OSS 20B |
| Styling | CSS3 |
| Data Format | JSON |
| Package Manager | npm |
| Backend Build | Maven |
| Version Control | Git & GitHub |

---

# 👨‍💻 Author

## Md Afzal

**B.Tech Computer Science & Engineering**

### Skills

- Java
- Spring Boot
- SQL
- Data Analytics
- React
- JavaScript
- Power BI
- Excel
- Git & GitHub

---

# 🌐 GitHub

GitHub:

https://github.com/iamafzal-06

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

# 📄 License

This project is created for educational, learning and portfolio purposes.

---

<p align="center">
  <strong>Built with ❤️ by Md Afzal</strong>
</p>
