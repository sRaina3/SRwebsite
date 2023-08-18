import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import './App.css';

const App = () => {
  const [dots, setDots] = useState([]);
  const [showDots, setShowDots] = useState(true)

  useEffect(() => {
    const newDots = [];
    for (let i = 0; i < 20; i++) {
      newDots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: getRandomColor(),
      });
    }
    setDots(newDots);
  }, [])
  
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      if (showDots) {
        setDots((prevDots) => prevDots.map((dot) => {
          let newVX = dot.vx;
          let newVY = dot.vy;
          if (dot.x < 0 || dot.x >= window.innerWidth) {
            newVX = -dot.vx;
          }
          if (dot.y < 0 || dot.y >= window.innerHeight) {
            newVY = -dot.vy;
          }

          return {
            ...dot,
            x: dot.x + newVX,
            y: dot.y + newVY,
            vx: newVX,
            vy: newVY,
            };
          })
        );
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [showDots]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  const handleDotClick = (event) => {
    const newDot = {
      x: event.clientX,
      y: event.clientY,
      vx: (Math.random() - 0.5),
      vy: (Math.random() - 0.5), 
      color: getRandomColor()
    };

    if (dots.length >= 100) {
      setDots(dots.shift());
    }
    setDots([...dots, newDot]);
  };

  const handleHideBackground = () => {
    setShowDots(!showDots);
  };

  return (
    <div className='App' onClick={handleDotClick}>
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{left: dot.x, top: dot.y, backgroundColor: dot.color}}
        >
          {dots.map((otherDot, otherIndex) => {
            if (index !== otherIndex) {
              const distance = Math.sqrt((dot.x - otherDot.x) ** 2 + (dot.y - otherDot.y) ** 2)
              if (distance <= 80) {
                  return (
                    <div
                      key={otherIndex}
                      className="line"
                      style={{left: 4, top: 4, width: distance,
                        transform: `rotate(${Math.atan2(otherDot.y - dot.y, otherDot.x - dot.x)}rad)`
                      }}
                    ></div>
                  );
                }
            }
            return null;
          })}
        </div>
      ))}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
        <Navbar/>   
      </Router>
      <button className='hide-background-button' onClick={handleHideBackground}>
        {showDots ? 'Pause Background' : 'Resume Background'}
      </button>
    </div>
  );
}

export default App;
