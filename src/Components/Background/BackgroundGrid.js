
import React, { useState, useEffect } from 'react';
import './BackgroundGrid.css';



const BackgroundGrid = ({ colorScheme }) => {
  const colorSchemes = [
    // Color scheme LIGHT
    [
      'rgba(220, 192, 252, 0.822)',
      'rgb(255, 240, 0, 0.7)',
      'rgba(206, 102, 201, 0.7)'
    ],

    // Color scheme DARK
    [
      'rgba(53, 4, 56, 0.8)',
      'rgba(9, 10, 102, 0.8)',
      'rgba(53, 4, 56, 0.8)'
    ],


    // Add more color schemes as needed
  ];

  const [color1, color2, color3] = colorSchemes[colorScheme];
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (percentage < 50) {
      const interval = setInterval(() => {
        setPercentage(prevPercentage => (prevPercentage + 0.6) % 51); // Cycle between 0 and 50
      }, 5);

      return () => clearInterval(interval);
    }
  }, [percentage, colorScheme]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to bottom right, ${color1} 0%, ${color2} ${percentage}%, ${color3} 100%)`
  };

  return (
    <div className="gradient-background" style={gradientStyle}>
    </div>

  );
};

export default BackgroundGrid;