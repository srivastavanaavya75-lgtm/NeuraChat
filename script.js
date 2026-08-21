"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const chatForm = document.getElementById("chatForm");
    const messageInput = document.getElementById("messageInput");
    const sendBtn = document.getElementById("sendBtn");
    const chatLog = document.getElementById("chatLog");
    const clearChatBtn = document.getElementById("clearChatBtn");
    const typingRow = document.getElementById("typingRow");
    const suggestions = document.getElementById("suggestions");
    const mascotPanel = document.querySelector(".mascot-panel");

    if (
        !chatForm ||
        !messageInput ||
        !sendBtn ||
        !chatLog
    ) {
        console.error(
            "NeuraChat: Required elements are missing."
        );
        return;
    }


    let userName =
        localStorage.getItem("neuraChatUserName") || "";

    let isResponding = false;


    /* =====================================================
       HELPERS
    ===================================================== */

    function getTime() {

        return new Date().toLocaleTimeString(
            [],
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

    }


    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    function scrollToBottom() {

        requestAnimationFrame(() => {

            chatLog.scrollTop =
                chatLog.scrollHeight;

        });

    }


    /* =====================================================
       MESSAGE
    ===================================================== */

    function addMessage(sender, text) {

        const row =
            document.createElement("div");

        row.className =
            sender === "user"
                ? "message-row user-row"
                : "message-row bot-row";


        const avatar =
            document.createElement("div");

        avatar.className =
            sender === "user"
                ? "avatar user-avatar"
                : "avatar bot-avatar";

        avatar.textContent =
            sender === "user"
                ? "YOU"
                : "✦";


        const content =
            document.createElement("div");

        content.className =
            "message-content";


        const bubble =
            document.createElement("div");

        bubble.className =
            sender === "user"
                ? "message-bubble user-bubble"
                : "message-bubble bot-bubble";

        bubble.innerHTML =
            escapeHTML(text);


        const time =
            document.createElement("div");

        time.className =
            "message-time";

        time.textContent =
            getTime();


        content.appendChild(bubble);
        content.appendChild(time);

        row.appendChild(avatar);
        row.appendChild(content);

        chatLog.appendChild(row);

        scrollToBottom();

    }


    /* =====================================================
       BOT ENGINE
    ===================================================== */

    function getBotResponse(message) {

        const original =
            message.trim();

        const text =
            original.toLowerCase();


        /* NAME */

        const nameMatch =
            original.match(
                /^(?:my name is|i am|i'm|im|call me)\s+([a-zA-Z][a-zA-Z'-]*)/i
            );


        if (nameMatch) {

            userName =
                nameMatch[1]
                    .charAt(0)
                    .toUpperCase() +
                nameMatch[1]
                    .slice(1)
                    .toLowerCase();


            localStorage.setItem(
                "neuraChatUserName",
                userName
            );


            return `Nice to meet you, ${userName}! 💜 I'll remember your name locally.`;

        }


        /* REMEMBER NAME */

        if (
            text.includes("remember my name") ||
            text.includes("do you remember my name") ||
            text.includes("what is my name") ||
            text.includes("what's my name") ||
            text.includes("whats my name") ||
            text === "who am i"
        ) {

            if (userName) {

                return `Of course I remember you, ${userName}! 💜`;

            }

            return "You haven't told me your name yet. Try saying: My name is Naavya.";

        }


        /* GREETINGS */

        if (
            /^(hi|hello|hey|hii|hiii|yo|hiya)\b/i.test(
                text
            )
        ) {

            if (userName) {

                return `Hey ${userName}! 👋💜 I'm NeuraChat. What can I help you with?`;

            }

            return "Hi! 💜 I'm NeuraChat. Ask me something!";

        }


        /* IDENTITY */

        if (
            text.includes("who are you") ||
            text.includes("what are you") ||
            text.includes("your name") ||
            text.includes("introduce yourself") ||
            text.includes("what is neurachat")
        ) {

            return "I'm NeuraChat 💜, a local rule-based AI assistant built with HTML, CSS and JavaScript.";

        }


        /* CAPABILITIES */

        if (
            text.includes("what can you do") ||
            text.includes("what do you do") ||
            text.includes("capabilities") ||
            text.includes("abilities") ||
            text.includes("features") ||
            text.includes("how can you help")
        ) {

            return "I can recognize predefined intents, respond to common questions, remember your name locally, handle basic conversations and provide helpful fallback responses. 🧠✨";

        }


        /* HOW ARE YOU */

        if (
            text.includes("how are you") ||
            text.includes("how are u") ||
            text.includes("how r u") ||
            text.includes("are you okay")
        ) {

            return "I'm online and ready to chat. 🟣✨ How are you doing?";

        }


        /* STATUS */

        if (
            text === "status" ||
            text.includes("are you online") ||
            text.includes("system status") ||
            text === "online" ||
            text.includes("working")
        ) {

            return "System status: Online. Rule engine active. Local processing enabled. 🟢";

        }


        /* HELP */

        if (
            text === "help" ||
            text.includes("how do i use you") ||
            text.includes("how to use you") ||
            text.includes("what should i ask") ||
            text.includes("commands")
        ) {

            return "Try asking me things like Hello, Who are you?, What can you do?, How are you?, or tell me your name.";

        }


        /* THANKS */

        if (
            text.includes("thank you") ||
            text.includes("thanks") ||
            text === "thx" ||
            text === "ty"
        ) {

            return "You're very welcome! 💜✨";

        }


        /* GOODBYE */

        if (
            text === "bye" ||
            text === "goodbye" ||
            text === "good bye" ||
            text.includes("see you")
        ) {

            return "Goodbye! 👋 Thanks for chatting with NeuraChat.";

        }


        /* FALLBACK */

        return "I couldn't match that message to one of my predefined intents. Try asking about my identity, capabilities, name, status or how to use me.";

    }


    /* =====================================================
       TYPING
    ===================================================== */

    function showTyping() {

        if (typingRow) {

            typingRow.hidden = false;

        }

        if (mascotPanel) {

            mascotPanel.classList.add(
                "is-typing"
            );

        }

        scrollToBottom();

    }


    function hideTyping() {

        if (typingRow) {

            typingRow.hidden = true;

        }

        if (mascotPanel) {

            mascotPanel.classList.remove(
                "is-typing"
            );

        }

    }


    /* =====================================================
       SEND
    ===================================================== */

    function sendMessage() {

        if (isResponding) {
            return;
        }


        const message =
            messageInput.value.trim();


        if (!message) {

            messageInput.focus();

            return;

        }


        isResponding = true;


        addMessage(
            "user",
            message
        );


        messageInput.value = "";

        sendBtn.disabled = true;

        showTyping();


        setTimeout(() => {

            const response =
                getBotResponse(message);


            hideTyping();


            addMessage(
                "bot",
                response
            );


            isResponding = false;

            messageInput.disabled = false;
            messageInput.readOnly = false;

            sendBtn.disabled = true;

            messageInput.focus();

        }, 500);

    }


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    chatForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            event.stopPropagation();

            sendMessage();

        }
    );


    /* =====================================================
       ENTER
    ===================================================== */

    messageInput.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter" &&
                !event.shiftKey
            ) {

                event.preventDefault();

                sendMessage();

            }

        }
    );


    /* =====================================================
       INPUT
    ===================================================== */

    messageInput.addEventListener(
        "input",
        () => {

            sendBtn.disabled =
                messageInput.value.trim().length === 0;

        }
    );


    /* =====================================================
       SEND BUTTON
    ===================================================== */

    sendBtn.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            sendMessage();

        }
    );


    /* =====================================================
       SUGGESTIONS
    ===================================================== */

    if (suggestions) {

        suggestions
            .querySelectorAll(
                "[data-message]"
            )
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    () => {

                        const message =
                            button.dataset.message;

                        if (!message) {
                            return;
                        }

                        messageInput.value =
                            message;

                        messageInput.focus();

                        sendMessage();

                    }
                );

            });

    }


    /* =====================================================
       CLEAR
    ===================================================== */

    if (clearChatBtn) {

        clearChatBtn.addEventListener(
            "click",
            () => {

                chatLog.innerHTML = "";

                hideTyping();

                addMessage(
                    "bot",
                    userName
                        ? `Welcome back, ${userName}! 💜 Ready when you are.`
                        : "Hi! 💜 I'm NeuraChat. Ask me something!"
                );

                messageInput.value = "";

                messageInput.disabled = false;

                messageInput.readOnly = false;

                sendBtn.disabled = true;

                messageInput.focus();

            }
        );

    }


    /* =====================================================
       FORCE INPUT ACTIVE
    ===================================================== */

    messageInput.disabled = false;

    messageInput.readOnly = false;

    messageInput.removeAttribute(
        "disabled"
    );

    messageInput.removeAttribute(
        "readonly"
    );

    messageInput.style.pointerEvents =
        "auto";

    messageInput.style.userSelect =
        "text";

    messageInput.style.cursor =
        "text";


    /* =====================================================
       INITIAL MESSAGE
    ===================================================== */

    addMessage(
        "bot",
        userName
            ? `Welcome back, ${userName}! 💜 I'm NeuraChat. Ready when you are.`
            : "Hi! 💜 I'm NeuraChat. Ask me something!"
    );


    sendBtn.disabled = true;

    messageInput.focus();


    console.log(
        "================================="
    );

    console.log(
        "NEURACHAT FINAL SCRIPT LOADED"
    );

    console.log(
        "INPUT SYSTEM READY"
    );

    console.log(
        "================================="
    );

});