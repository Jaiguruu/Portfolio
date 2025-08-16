
# Agentic AI Portfolio Chatbot: A Conversational Gateway

[](https://reactjs.org/)
[](https://www.typescriptlang.org/)
[](https://vitejs.dev/)
[](https://gemini.google.com/)

**Live Application:** [**portfolio-chat.pranavjai.com**](https://portfolio-delta-henna-57.vercel.app/)

## Welcome to My Interactive Resume

This project reimagines the professional portfolio. Instead of a static, one-way document, I've built a dynamic conversational agent that acts as my digital twin. It's an AI-powered version of me, ready to answer your questions about my skills, projects, and experience in real-time.

Think of it as a first-round interview, available 24/7. This project doesn't just *list* my skills in AI and systems engineering; it *is* a demonstration of them.

## The Philosophy: Solving Problems from First Principles

A resume's core purpose is to effectively communicate a candidate's value. The traditional format—a PDF—is often inefficient. Recruiters have to parse text, connect disparate points, and infer skills.

I applied a first-principles approach to this problem: *How can I create the most direct and engaging channel to convey my expertise?*

The answer was to build an agent that could represent me, leveraging the very technologies I'm passionate about to create a seamless, intuitive, and memorable experience for you.

## Key Features

  * **Conversational Q\&A:** Ask anything from "Tell me about your experience with Federated Learning" to "What was the biggest challenge on your blood transfusion supply chain project?".
  * **Agentic Persona:** The AI doesn't just retrieve data; it embodies my professional persona, answering in the first person based on a carefully crafted system prompt and my resume's context.
  * **WhatsApp-Inspired UI:** The familiar and intuitive interface, built from scratch with React and TypeScript, ensures there's zero learning curve.
  * **Real-Time Interaction:** Get immediate, context-aware answers without having to schedule a call or send an email.
  * [cite\_start]**Full-Stack Architecture:** A complete showcase of skills from front-end development with React to back-end AI integration with the Google Gemini API. [cite: 1]

## How It Works: An Architectural Glimpse

This application is built on a modern, robust tech stack designed for performance and scalability.

1.  **Frontend:** The user interface is a single-page application built with **React** and **TypeScript**, powered by **Vite** for a lightning-fast development experience. The component-based architecture (`ChatScreen.tsx`, `MessageBubble.tsx`, `MessageInput.tsx`) keeps the code clean and maintainable.
2.  **AI Service Layer:** The core logic resides in the `geminiService.ts` file. This service acts as a bridge between the frontend and the AI model.
3.  **The Brain:** It securely communicates with the **Google Gemini API**, sending the user's query along with the system prompt that instructs the AI on its persona and knowledge base (my resume).
4.  **Dynamic Rendering:** The AI's response is streamed back to the React application, which dynamically updates the state to render the new message in the chat, creating a seamless conversational flow.

## Getting Started Locally

Want to run this project on your own machine?

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Jaiguruu/pranav-jai-s-s-_ai-portfolio.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd pranav-jai-s-s-_ai-portfolio
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Set up environment variables:**

      * Create a file named `.env.local` in the root directory.
      * Add your Google Gemini API key to this file:
        ```
        GEMINI_API_KEY=YOUR_API_KEY_HERE
        ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## Future Vision

This is just the beginning. I'm actively exploring ways to enhance the agent's capabilities:

  * **Full RAG Implementation:** Integrating a vector database (like ChromaDB) to allow the agent to query a much larger corpus of my technical writings, project documentation, and code.
  * **Multi-Modal Input:** Enabling the chatbot to analyze images or code snippets that a user might upload.
  * **Long-Term Memory:** Implementing session history so the agent can recall earlier parts of the conversation for more nuanced and contextual discussions.

-----

Thank you for your interest. Feel free to connect with me on [LinkedIn](https://www.google.com/search?q=https://linkedin.com/in/pranav-jai-25702b301) or explore my other projects on [GitHub](https://www.google.com/search?q=https://github.com/Jaiguruu).
