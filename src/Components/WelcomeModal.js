import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { User } from 'lucide-react';
function WelcomeModal() {
  const { userName, setUserName } = useTasks();
  const [input, setInput] = useState('');
  const [show, setShow] = useState(!userName);

  if (!show) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = input.trim() || 'Friend';
    setUserName(name);
    setShow(false);
  };

  return (
    <div className="welcome-overlay animate-fade-in">
      <div className="welcome-box animate-scale-in">
        <div className="bg-primary-custom bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: 64, height: 64 }}>
          <User size={32} color="#26c6a5" />
        </div>
        <h2 className="fw-bold mb-2">Welcome to Personal Dashboard!</h2>
        <p className="text-secondary mb-4">What should we call you?</p>
        <form onSubmit={handleSubmit} className="d-flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Enter your name..."
            className="form-control form-control-dark flex-grow-1"
            autoFocus
          />
          <button type="submit" className="btn btn-primary-custom px-4">
            Let's Go!
          </button>
        </form>
      </div>
    </div>
  );
}

export default WelcomeModal;
