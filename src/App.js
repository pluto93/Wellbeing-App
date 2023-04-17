import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import TestPage from './components/TestPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import MoodTracker from './pages/MoodTracker';
import FitnessRecommendations from './pages/FitnessRecommendations';
import Nutrition from './pages/Nutrition';
import Navbar from './components/Navbar';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import BMICalculator from './pages/BMICalculator';
import CalorieCalculator from './pages/CalorieCalculator';


function App() {
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setIdToken(token);
      } else {
        setIdToken(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <AuthDetails />
        {idToken ? (
          <>
            <Navbar />
            <div className='app'>
              <Routes>
                <Route path='/mood-tracker' element={<MoodTracker />} />
                <Route path='/fitness-recommendations' element={<FitnessRecommendations />} />
                <Route path='/nutrition' element={<Nutrition />} />
                <Route path='/bmi-calculator' element={<BMICalculator />} />
                <Route path='/calorie-calculator' element={<CalorieCalculator />} />
                <Route path='/test' element={AuthenticatedRoute(TestPage, !!idToken)} />
                <Route path='/page1' element={AuthenticatedRoute(Page1, !!idToken)} />
                <Route path='/page2' element={AuthenticatedRoute(Page2, !!idToken)} />
                <Route path='/' element={<Navigate to="/mood-tracker" />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;