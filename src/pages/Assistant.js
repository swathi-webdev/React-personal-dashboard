import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Bot, Send } from 'lucide-react';

function Assistant() {
  const { tasks, userName } = useTasks();
  const [messages, setMessages] = useState([
    { id: '1', text: `Hi ${userName || 'there'}! 👋 I'm your productivity assistant. Ask me about your tasks!`, sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const getResponse = (msg) => {
    const lower = msg.toLowerCase();
    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.length - completed;
    if (lower.includes('how many') || lower.includes('total')) return `You have ${tasks.length} total tasks: ${completed} completed and ${pending} pending.`;
    if (lower.includes('pending') || lower.includes('remaining')) return `You have ${pending} pending tasks. Keep going! 💪`;
    if (lower.includes('completed') || lower.includes('done')) return `You've completed ${completed} out of ${tasks.length} tasks. ${completed > pending ? 'Great job! 🎉' : 'Keep pushing!'}`;
    if (lower.includes('high') || lower.includes('priority')) return `High priority: ${tasks.filter(t => t.priority === 'high' && !t.completed).length} pending. Focus on those first!`;
    if (lower.includes('hello') || lower.includes('hi')) return `Hey ${userName || 'there'}! How can I help you today?`;
    return `I can help with task stats! Try asking about pending, completed, or high-priority tasks.`;
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { id: Date.now().toString(), text: input.trim(), sender: 'user' };
    const botMsg = { id: (Date.now() + 1).toString(), text: getResponse(input), sender: 'bot' };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="mx-auto d-flex flex-column" style={{ maxWidth: 600, height: 'calc(100vh - 8rem)' }}>
      <div className="mb-3 animate-fade-in">
        <h1 className="fw-bold">Assistant</h1>
        <p className="text-secondary">Your productivity buddy</p>
      </div>

      <div className="flex-grow-1 overflow-auto mb-3">
        {messages.map((msg, i) => (
          <div key={msg.id} className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} animate-fade-in-up`}
            style={{ animationDelay: `${i * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}>
            <div className={msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}>
              {msg.sender === 'bot' && <Bot size={14} className="me-1" style={{ color: '#26c6a5' }} />}
              <span className="small">{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="d-flex gap-2">
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about your tasks..." className="form-control form-control-dark flex-grow-1" />
        <button type="submit" className="btn btn-primary-custom px-3">
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}

 export default Assistant;
