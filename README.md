# NeuraChat — Rule-Based AI Assistant

A polished, portfolio-ready **rule-based chatbot** built with vanilla HTML, CSS, and JavaScript. NeuraChat matches user input against a deterministic knowledge base of intents and responds accordingly — no external AI model, no API calls, no backend.

> **This project implements a deterministic rule-based chatbot and does not use an external LLM or generative AI API.**

---

## Features

- 🧠 **7 built-in intents** — greeting, identity, capabilities, help, thanks, status, goodbye
- 🔤 **Input normalization** — case-insensitive, whitespace-tolerant matching
- 🎲 **Response variation** — multiple pre-written replies per intent, chosen at random
- 🛟 **Fallback system** — graceful response for unrecognized input
- 👋 **Exit handling** — recognizes goodbye/exit commands, ends the session, and offers a restart
- 💬 **Suggested prompt chips** — one-tap example messages
- 💾 **Optional chat persistence** — conversation is restored from `localStorage` on reload
- ♿ **Accessible** — semantic HTML, ARIA live regions, visible focus states, keyboard support
- 📱 **Fully responsive** — desktop, tablet, and mobile layouts
- 🎨 **Premium glassmorphism UI** — deep purple palette, soft neon glow, smooth animations

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, glassmorphism, keyframe animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | Browser `localStorage` (optional persistence) |
| Dependencies | None — no frameworks, no build step |

---

## How It Works

NeuraChat follows a simple, transparent pipeline:

```
User Input
    ↓
normalizeInput()      → lowercase + trim + collapse whitespace
    ↓
detectIntent()        → keyword lookup against the knowledge base
    ↓
getResponse()         → random reply from the matched intent's pool
    ↓
addMessage()          → render bubble in the chat log
```

If no intent matches, a randomly selected **fallback response** is returned instead.

### Rule Engine Architecture

The knowledge base is a plain JavaScript object, so lookups are O(number of intents), not a long `if/else` chain:

```javascript
const KNOWLEDGE_BASE = {
  greeting: {
    keywords: ["hi", "hello", "hey", "good morning", ...],
    responses: ["Hello! 👋 How can I help you today?", ...]
  },
  identity: { keywords: [...], responses: [...] },
  capabilities: { keywords: [...], responses: [...] },
  help: { keywords: [...], responses: [...] },
  thanks: { keywords: [...], responses: [...] },
  status: { keywords: [...], responses: [...] },
  goodbye: { keywords: [...], responses: [...] }
};
```

`detectIntent()` checks the normalized input against each intent's keyword list using `Array.prototype.some()` and `String.prototype.includes()` — no nested conditionals, fully data-driven.

### Supported Intents

| Intent | Example triggers |
|---|---|
| Greeting | hi, hello, hey, good morning |
| Identity | who are you, what's your name |
| Capabilities | what can you do, help me |
| Help | help, how does this work |
| Thanks | thanks, thank you, appreciate it |
| Status | how are you, what's up |
| Goodbye | bye, goodbye, exit, quit |

Any input that doesn't match a keyword triggers the **fallback response** system.

---

## Screenshots

```
<img width="1912" height="912" alt="image" src="https://github.com/user-attachments/assets/2607e170-29b1-4780-af6f-7a01452df999" />
```

---

## Installation

No build tools or dependencies required.

1. Download or clone this folder.
2. Open `index.html` directly in your browser, **or**
3. Serve it locally with VS Code's Live Server extension (recommended for accurate `localStorage` behavior):
   - Right-click `index.html` → **Open with Live Server**

---

## Usage

- Type a message and press **Enter** (or tap the send button).
- Try the suggestion chips for quick examples: *Hello 👋*, *Who are you?*, *What can you do?*, *Help*.
- Say **bye** / **goodbye** / **exit** / **quit** to end the conversation. Tap **Start New Chat** to begin again.
- Use the **Clear** button in the header at any time to reset the conversation.

---

## Project Structure

```text
decode-chatbot/
│
├── index.html      # App markup and structure
├── style.css        # Purple glassmorphism design system
├── script.js         # Rule-based engine + UI logic
├── README.md
└── assets/
    └── ...           # Screenshots, etc.
```

---

## Future Improvements

- Add more intents (weather, jokes, FAQs) using the same keyword/response pattern
- Support multi-keyword confidence scoring for ambiguous phrases
- Add a light theme toggle
- Export conversation as a `.txt` transcript

---

## Author

Built as part of the **DecodeLabs Industrial Training — Project 1: Rule-Based AI Chatbot** assignment.
