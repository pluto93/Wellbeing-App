import React from 'react';
import './MoodCalendar.css';

function MoodCalendar({ moods }) {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const getMoodsForDay = (day) => {
    const filteredMoods = moods.filter((mood) => {
      const moodDate = new Date(mood.date);
      return moodDate.getDate() === day;
    });
    return filteredMoods.map((mood) => mood.mood);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const moodsForDay = getMoodsForDay(i);
      const classNames = `day ${moodsForDay.length > 0 ? moodsForDay.join(' ') : ''}`;
      days.push(<div key={i} className={classNames}>{i}</div>);
    }
    return days;
  };

  return (
    <div className="MoodCalendar">
      {renderDays()}
    </div>
  );
}

export default MoodCalendar;
