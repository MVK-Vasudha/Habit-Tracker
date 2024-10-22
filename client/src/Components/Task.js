import React, { useState } from 'react';
import './Task.css';

const Task = () => {
  const [taskName, setTaskName] = useState('');
  const [days, setDays] = useState(21);
  const [completedDays, setCompletedDays] = useState(0);
  const [interval, setInterval] = useState('Every day');
  const [timeOfDay, setTimeOfDay] = useState('Morning');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDaysChange = (event) => {
    setDays(parseInt(event.target.value, 10));
  };

  const handleCompletedDaysChange = (event) => {
    setCompletedDays(parseInt(event.target.value, 10));
  };

  const handleIntervalChange = (event) => {
    setInterval(event.target.value);
  };

  const handleTimeOfDayChange = (event) => {
    setTimeOfDay(event.target.value);
  };

  return (
    <div className="task-container">
      <h2>Create a New Habit</h2>
      <form>
        <div className="form-group">
          <label htmlFor="taskName">Habit Name:</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={handleTaskNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">Total Days:</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={handleDaysChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="completedDays">Completed Days:</label>
          <input
            type="number"
            id="completedDays"
            value={completedDays}
            onChange={handleCompletedDaysChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interval">Interval:</label>
          <select id="interval" value={interval} onChange={handleIntervalChange}>
            <option value="Every day">Every day</option>
            <option value="Every other day">Every other day</option>
            <option value="Every week">Every week</option>
            <option value="Every month">Every month</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timeOfDay">Time of Day:</label>
          <select
            id="timeOfDay"
            value={timeOfDay}
            onChange={handleTimeOfDayChange}
          >
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Night">Night</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
        <button type="submit">Create Habit</button>
      </form>
    </div>
  );
};

export default Task;
