import React, { useState } from 'react';
import './BMI.css';

function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  function calcBmi() {
    let bmi = (weight / (height * height)).toFixed(2);
    if (weight == null || weight == "" || weight <= 0) {
      return window.alert("You must enter a valid weight number");
    }
    if (height == null || height == "" || height < 0 || height > 3) {
      return window.alert("You must enter a valid height number in meters");
    }

    setResult(bmi);
  }


  return (
    <div className="main">
      <div className="header">
        <div className="order-box">
          <form>
            <h1>BMI CALCULATOR</h1>
            <input
              id="Weight"
              type="number"
              placeholder="Weight (KG)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <br />
            <input
              id="Height"
              type="number"
              placeholder="Height (METER)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <br />
            <input
              id="Result"
              type="text"
              placeholder="Result"
              readOnly
              value={result}
            />
            <br />
            <ul>
              <li>Less than 18.5 = Underweight</li>
              <li>Between 18.5 - 24.9 = Healthy Weight</li>
              <li>Between 25 - 29.9 = Overweight</li>
              <li>Over 30 = Obese</li>
            </ul>
            <button onClick={calcBmi} type="button">
              CALCULATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BMI;
