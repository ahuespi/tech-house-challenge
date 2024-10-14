// import React, { useEffect, useState } from 'react';

import './App.css'
import { useState, useEffect } from "react";



const App = () => {
  const [road, setRoad] = useState('CCC.G...O...R...');
  const [carPositions, setCarPositions] = useState([0, 1, 2]);
  const [lightPositions] = useState([5, 12]);
  const [lightColors, setLightColors] = useState(['G', 'R', 'O']);
  const [timeStep, setTimeStep] = useState(0);

  const lightCycle = ['G', 'G', 'G', 'G', 'G', 'O', 'R', 'R', 'R', 'R', 'R'];



  useEffect(() => {
    const lightInterval = setInterval(() => {
      setTimeStep((prevTimeStep) => (prevTimeStep + 1) % lightCycle.length);
      setLightColors(lightPositions.map(() => lightCycle[timeStep]));
    }, 1000);
    const moveCars = setInterval(() => {
      setCarPositions((prevPositions) => prevPositions.map((pos) => {
        const firstLightStop = pos < lightPositions[0] && lightColors[0] === 'R';
        const secondLightStop = pos < lightPositions[1] && pos >= lightPositions[0] && lightColors[1] === 'R';

        if (!firstLightStop && !secondLightStop) {
          return pos + 1;
        } else {
          return pos;
        }
      }))
    }, 1000)

    return () => {
      clearInterval(lightInterval);
      clearInterval(moveCars)
    }
  }, [timeStep, lightColors, lightPositions]);

  // Actualiza la carretera en cada iteración
  useEffect(() => {
    const newRoad = Array(road.length).fill('.');
    carPositions.forEach((pos) => {
      if (pos < road.length) {
        newRoad[pos] = 'C';
      }
    });
    lightPositions.forEach((lightPos, idx) => {
      if (lightPos < road.length) {
        newRoad[lightPos] = lightColors[idx];
      }
    });
    setRoad(newRoad.join(''));
  }, [carPositions, lightColors]);


  return (
    <div className="road" style={{ fontSize: '2em', fontFamily: 'monospace', textAlign: 'center', marginTop: '20px' }}>
      <div className="traffic-light">
        <h1>Traffic Light</h1>
        <p>Estado del semaforo: {lightColors[0] === 'G' ? <span style={{ color: 'green', backgroundColor: 'green', border: '1px solid green', borderRadius: '100%', padding: '10px' }}>G</span> : lightColors[0] === 'O' ? <span style={{ color: 'orange', backgroundColor: 'orange', border: '1px solid orange', borderRadius: '50%', padding: '10px' }}>O</span> : <span style={{ color: 'red', backgroundColor: 'red', border: '1px solid red', borderRadius: '50%', padding: '10px' }}>R</span>}</p>
        <pre>{road}</pre>
      </div>
    </div>
  )
}

export default App;