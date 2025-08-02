import { useState } from "react";
import "../style/ChatAI.css";

export default function ChatAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://j0l5sptb.up.railway.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (res.ok && data.reply) {
        const aiMessage = { role: "assistant", content: data.reply };
        setMessages((prev) => [...prev, aiMessage]);
      } else {
        throw new Error(data.error || "Respons tidak valid dari AI");
      }
    } catch (error) {
      console.error("Chat error:", error.message);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Error: Gagal menghubungi AI server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-container">
      <h2>💬 Chat AI</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.role}`}>
            <b>{msg.role === "user" ? "Kamu" : "AI"}:</b> {msg.content}
          </div>
        ))}
        {loading && (
          <div className="message assistant typing">AI sedang mengetik...</div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Tanyakan sesuatu..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage} disabled={loading}>
          Kirim
        </button>
      </div>
    </div>
  );
}
