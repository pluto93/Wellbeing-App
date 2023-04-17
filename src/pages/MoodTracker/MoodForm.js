import React, { useState } from 'react';
import './MoodForm.css';

function MoodForm({ addMood }) {
  const [mood, setMood] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addMood({ date: new Date(), mood });
    setMood('');
  };

  return (
    <form onSubmit={handleSubmit} className="MoodForm">
      <label htmlFor="mood">How are you feeling today?</label>
      <select id="mood" value={mood} onChange={(event) => setMood(event.target.value)}>
        <option value="">Select a mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="frustrated">Frustrated</option>
        <option value="content">Content</option>
      </select>
      <button type="submit">Add Mood</button>
    </form>
  );
}

export default MoodForm;
