# 💜 NeuraChat

<p align="center">
  <img src="assets/neurachat-mascot.png" alt="NeuraChat Mascot" width="420">
</p>

<h3 align="center">A Premium Rule-Based AI Assistant</h3>

<p align="center">
  A beautifully designed, fully client-side conversational assistant built with
  <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Vanilla JavaScript</strong>.
</p>

<p align="center">
  <a href="https://neura-chat-sepia.vercel.app/">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-NeuraChat-8B5CF6?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/srivastavanaavya75-lgtm/NeuraChat">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

## ✨ Overview

**NeuraChat** is a premium browser-based conversational assistant that demonstrates how an AI-style chat experience can be built entirely on the frontend without relying on external AI APIs.

Instead of sending messages to a remote language model, NeuraChat uses a **deterministic rule-based engine** to recognize predefined intents and generate appropriate responses locally.

The project combines conversational logic with a polished dark-purple interface, responsive layouts, interactive message bubbles, typing states, local memory, and a custom AI mascot.

> **No external AI API. No backend. No server-side processing. Just a lightweight local conversational engine running directly in the browser.**

---

## 🚀 Live Demo

### [🌐 Try NeuraChat Live](https://neura-chat-sepia.vercel.app/)

Experience the complete application directly in your browser.

---

## 🎯 What NeuraChat Can Do

NeuraChat currently supports a collection of predefined conversational intents, including:

- 👋 Greetings
- 👤 Identity and introduction
- 🧠 Capability questions
- 😊 Basic conversational interactions
- 💭 Common questions
- 📝 Local name recognition
- 💬 Context-aware responses for supported intents
- ❓ Intelligent fallback responses
- 🧹 Conversation clearing
- 💡 Suggested prompts
- ⌨️ Enter-to-send interaction

The assistant is intentionally **rule-based and deterministic**, making its behavior predictable and transparent.

---

## 🧠 How It Works

NeuraChat follows a simple local processing pipeline:

```text
User Message
      │
      ▼
Input Normalization
      │
      ▼
Intent Matching
      │
      ├── Known Intent ──► Predefined Response
      │
      └── Unknown Intent ─► Fallback Response
      │
      ▼
Chat UI Update
      │
      ▼
Local Conversation State
