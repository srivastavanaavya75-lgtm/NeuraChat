# 💜 NeuraChat

<p align="center">
  <img src="assets/neurachat-mascot.png" alt="NeuraChat Mascot" width="300">
</p>

<p align="center">
  <strong>A Premium Rule-Based AI Assistant</strong>
</p>

<p align="center">
  A lightweight, fully local, rule-based AI assistant built with Python for fast, interactive, and privacy-friendly conversations without relying on external AI APIs.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/AI-Rule--Based-A855F7?style=for-the-badge" alt="Rule-Based AI">
  <img src="https://img.shields.io/badge/Architecture-Modular-7C3AED?style=for-the-badge" alt="Modular Architecture">
  <img src="https://img.shields.io/badge/Local--First-22C55E?style=for-the-badge" alt="Local First">
  <img src="https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge" alt="Completed">
</p>

---

## 🌌 Overview

**NeuraChat** is a premium rule-based AI assistant developed with Python.

Instead of depending on external Large Language Models or paid AI APIs, NeuraChat uses a structured conversational engine based on keyword matching, pattern recognition, intent detection, conditional logic, and predefined responses.

The project demonstrates the fundamentals of conversational AI while keeping the system lightweight, transparent, customizable, and easy to run locally.

### 🎯 Project Goals

- Build a functional AI-style conversational assistant using Python
- Understand the fundamentals of conversational AI
- Implement intent and keyword-based response handling
- Create a lightweight local-first assistant
- Design an architecture that can be expanded over time
- Demonstrate practical AI engineering concepts without requiring an external LLM

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
- 🤖 Assistant identity responses
- ❓ Help and general conversational responses
- 🔧 Easily customizable response rules
- 📦 Minimal dependency requirements

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

NeuraChat follows a lightweight rule-based conversational architecture.

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

### Processing Flow

    User Message
         ↓
    Normalize Input
         ↓
    Extract Keywords / Patterns
         ↓
    Identify Intent
         ↓
    Match Against Rules
         ↓
    Select Response
         ↓
    Return Assistant Response

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

NeuraChat is designed to be easy to customize and extend.

Developers can add:

- New keywords
- New intents
- New response patterns
- Additional conversational rules
- Additional fallback responses
- New assistant capabilities

Example rule:

    if "hello" in user_input:
        return "Hello! How can I help you?"

Additional rules can be introduced to expand the assistant's conversational capabilities without changing the overall architecture.

---

## 🔐 Privacy

NeuraChat follows a local-first approach.

The core conversational system does not require sending user messages to an external AI service.

The basic assistant can operate without:

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

Rule-based systems also provide transparency because the developer can directly inspect how an input is mapped to a response.

NeuraChat can therefore serve as a foundation for gradually introducing more advanced technologies such as NLP, machine learning, and LLMs.

---

## 📊 Key Concepts Demonstrated

- 🐍 Python application development
- 🧠 Artificial Intelligence fundamentals
- 🔀 Rule-based systems
- 📝 Natural-language input handling
- 🔍 Keyword matching
- 🎯 Pattern recognition
- 🧩 Intent classification
- ⚙️ Conditional logic
- 💬 Conversational design
- 🏗️ Modular architecture
- 💻 Local application development
- 🛡️ Error and fallback handling

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

NeuraChat is a functional rule-based conversational AI project that demonstrates the foundations of chatbot and conversational-system development.

The current implementation provides a lightweight foundation that can be expanded with NLP, machine learning, voice capabilities, knowledge retrieval, or optional LLM integration in future versions.

---

## 👩‍💻 Author

### Naavya Srivastava

**B.Tech CSE (Data Science)**

Interested in:

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
