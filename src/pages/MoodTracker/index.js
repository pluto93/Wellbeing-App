import React, { useState } from 'react'
import MoodCalendar from './MoodCalendar'
import MoodForm from './MoodForm'
import './style.css'

export default function MoodTracker() {
    const [moods, setMoods] = useState([]);

    const addMood = (mood) => {
        setMoods([...moods, mood]);
    };

    return (
        <div className='mood-tracker'>
            <h1>Mood Tracker</h1>
            <MoodCalendar moods={moods} />
            <MoodForm addMood={addMood} />
        </div>
    );
}
