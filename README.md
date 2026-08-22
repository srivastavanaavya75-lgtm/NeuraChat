# 💜 NeuraChat

<p align="center">
  <img src="assets/neurachat-mascot.png" alt="NeuraChat Mascot" width="280">
</p>

<p align="center">
  <strong>A Premium Rule-Based AI Assistant</strong>
</p>

<p align="center">
  A lightweight, fast, and privacy-friendly AI assistant built with Python using a rule-based conversational engine.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/AI-Rule%20Based-A855F7?style=for-the-badge" alt="Rule Based AI">
  <img src="https://img.shields.io/badge/Architecture-Modular-7C3AED?style=for-the-badge" alt="Modular Architecture">
  <img src="https://img.shields.io/badge/API%20Dependency-None-22C55E?style=for-the-badge" alt="No API Dependency">
  <img src="https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge" alt="Completed">
</p>

---

## 📌 Overview

**NeuraChat** is a premium rule-based AI assistant developed in Python. It is designed to simulate an AI-powered conversational experience using locally implemented logic rather than relying on external Large Language Models or paid AI APIs.

The system processes user input, identifies relevant keywords and conversational patterns, maps them to predefined intents, and generates an appropriate response.

NeuraChat focuses on the fundamentals of conversational AI while keeping the application lightweight, transparent, customizable, and easy to run locally.

---

## ✨ Features

- 💬 Interactive conversational interface
- 🧠 Rule-based conversational intelligence
- 🔍 Keyword and pattern-based intent detection
- 🎯 Predefined conversational intents
- ⚡ Fast local response generation
- 🔒 Privacy-friendly local processing
- 🌐 No external AI API dependency
- 💻 Lightweight Python implementation
- 🧩 Modular and extensible architecture
- 🛡️ Fallback handling for unsupported queries
- 👋 Greeting and farewell handling
- 🤖 AI-assistant identity responses
- ❓ Help and general conversational responses
- 🔧 Easy-to-expand response rules
- 📦 Minimal dependency requirements

---

## 🧠 How It Works

NeuraChat follows a simple conversational processing pipeline:

```text
User Input
    │
    ▼
Input Processing
    │
    ▼
Keyword / Pattern Matching
    │
    ▼
Intent Detection
    │
    ▼
Rule-Based Decision Engine
    │
    ▼
Response Selection
    │
    ▼
NeuraChat Response


---

## 🛠️ Tech Stack

### Core Technology

| Technology | Purpose |
|---|---|
| **Python** | Core programming language |
| **Rule-Based AI** | Conversational decision-making |
| **Pattern Matching** | User-input recognition |
| **Conditional Logic** | Intent and response handling |
| **String Processing** | Input normalization and analysis |

### Development Tools

| Tool | Purpose |
|---|---|
| **Visual Studio Code** | Development environment |
| **Git** | Version control |
| **GitHub** | Repository and source-code management |
| **Python Virtual Environment** | Isolated development environment |

---

## 🏗️ Architecture

NeuraChat is built around a lightweight rule-based architecture:

    ┌─────────────────────┐
    │      User Input     │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │  Input Normalizer   │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Pattern Recognition │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │  Intent Detection   │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │    Rule Engine      │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │ Response Generator  │
    └──────────┬──────────┘
               │
               ▼
    ┌─────────────────────┐
    │     AI Response     │
    └─────────────────────┘

---

## 💬 Example Interaction

    User: Hello

    NeuraChat: Hello! How can I help you today?

    User: Who are you?

    NeuraChat: I'm NeuraChat, your rule-based AI assistant.

    User: What can you do?

    NeuraChat: I can interact with you and respond to supported
    queries using my conversational rule engine.

    User: Bye

    NeuraChat: Goodbye! Have a great day.

---

## 🎯 Conversational Capabilities

NeuraChat is designed to handle conversational categories such as:

- 👋 Greetings
- 👋 Farewells
- 🤖 Assistant identity
- ❓ Help requests
- 💬 General conversation
- 🧠 Basic informational queries
- 🎯 Predefined conversational intents
- 🔍 Keyword-based queries
- 🛡️ Unsupported-query fallback responses

The rule system can be expanded with additional intents and response patterns.

---

## 📂 Project Structure

    NeuraChat/
    │
    ├── assets/
    │   └── neurachat-mascot.png
    │
    ├── main.py
    ├── requirements.txt
    ├── README.md
    └── .gitignore

---

## ⚙️ Installation

### 1. Clone the Repository

    git clone <YOUR_REPOSITORY_URL>

### 2. Open the Project

    cd NeuraChat

### 3. Create a Virtual Environment

    python -m venv venv

### 4. Activate the Virtual Environment

#### Windows

    venv\Scripts\activate

#### macOS / Linux

    source venv/bin/activate

### 5. Install Dependencies

    pip install -r requirements.txt

---

## ▶️ Run the Application

Start NeuraChat with:

    python main.py

The assistant will start locally and allow you to interact with it through the application interface.

---

## 🔧 Customization

NeuraChat is designed to be easy to customize.

Developers can extend the assistant by adding:

- New keywords
- New intents
- New response patterns
- Additional conversational rules
- Additional fallback responses
- New assistant capabilities

Example:

    if "hello" in user_input:
        return "Hello! How can I help you?"

Additional rules can be introduced to expand the assistant's conversational capabilities.

---

## 🔐 Privacy

NeuraChat follows a local-first approach.

The core conversational system does not require sending user messages to an external AI service.

This means the basic assistant can operate without:

- OpenAI API
- Gemini API
- Claude API
- External LLM inference
- Paid AI subscriptions

The conversational logic is executed locally through the application's programmed rules.

---

## ⚡ Why Rule-Based AI?

NeuraChat demonstrates that conversational systems can be built using traditional programming concepts without immediately depending on large language models.

The project provides practical exposure to:

- Intent recognition
- Pattern matching
- Text processing
- Conditional decision-making
- Conversational flow
- Response generation
- AI assistant architecture

It also provides a foundation for gradually introducing more advanced technologies such as NLP, machine learning, and LLMs.

---

## 📊 Key Concepts Demonstrated

- Python application development
- Artificial Intelligence fundamentals
- Rule-based systems
- Natural-language input handling
- Keyword matching
- Pattern recognition
- Intent classification
- Conditional logic
- Conversational design
- Modular architecture
- Local application development
- Error and fallback handling

---

## 🚀 Future Enhancements

Potential future improvements include:

- 🧠 NLP-based intent classification
- 🤖 Machine-learning-based responses
- 💾 Persistent conversation memory
- 📚 Custom knowledge base
- 🎤 Voice input
- 🔊 Text-to-speech
- 🌐 Web-based interface
- 🖥️ Desktop GUI
- 📊 Conversation analytics
- 👤 User profiles
- 🔌 Plugin architecture
- 🔎 Retrieval-Augmented Generation
- 🤖 Optional LLM integration
- 🧠 Local LLM support

---

## 🎓 Learning Outcomes

Through NeuraChat, the project demonstrates practical understanding of:

- Python programming
- AI system fundamentals
- Rule-based decision systems
- Conversational AI architecture
- Input processing
- Intent detection
- Pattern matching
- Response generation
- Modular software design
- Extensible application architecture

---

## 🌟 Project Highlights

    ┌──────────────────────────────────────────────┐
    │                  NEURACHAT                   │
    ├──────────────────────────────────────────────┤
    │                                              │
    │  🧠 Rule-Based AI                            │
    │  🐍 Python Powered                           │
    │  ⚡ Fast Local Processing                    │
    │  🔒 Privacy-Friendly                         │
    │  💬 Conversational Interaction               │
    │  🎯 Intent-Based Responses                   │
    │  🧩 Modular Architecture                     │
    │  🌐 No External AI API Required              │
    │  🔧 Easily Extensible                        │
    │                                              │
    └──────────────────────────────────────────────┘

---

## 📌 Project Status

**Status: Completed ✅**

NeuraChat is a functional rule-based conversational AI project and provides a foundation for experimenting with more advanced AI technologies in future versions.

---

## 👩‍💻 Author

### Naavya Srivastava

**B.Tech CSE (Data Science)**

Focused on:

- Artificial Intelligence
- Machine Learning
- Data Science
- Generative AI
- Software Development
- AI Product Development
- Full-Stack Development

---

## 🔗 Connect With Me

<p align="center">
  <a href="https://github.com/srivastavanaavya75-lgtm">GitHub</a>
  •
  <a href="https://www.linkedin.com/in/naavya-srivastava-661bb03ba/">LinkedIn</a>
</p>

---

## 📜 License

This project is intended for educational, personal, and experimental use.

---

<p align="center">
  <strong>Built with 💜 and Python</strong>
</p>

<p align="center">
  <strong>NeuraChat • Think. Respond. Evolve.</strong>
</p>
