import React, { useState } from 'react';
import Header from './Components/Header/Header';
import BackgroundGrid from './Components/Background/BackgroundGrid';
import CoolText from './Components/CoolText/CoolText';
import SectionBreak1 from './Components/SectionBreaks/SectionBreak1';
import AdditionalSection from './Components/SecondSection/AdditionalSection';
import SectionBreakUp1 from './Components/SectionBreaks/SectionBreakUp1';






const App = () => {
  const [colorScheme, setColorScheme] = useState(0);

  const colorSchemes = [
    // Color scheme 1
    [
      'rgba(220, 192, 252, 0.822)',
      'rgba(248, 236, 125, 0.7)',
      'rgba(206, 102, 201, 0.7)'
    ],


    // Color scheme DARK
    [
      'rgba(36, 3, 73, 0.822) ',
      'rgba(53, 3, 233, 0.7)',
      'gba(36, 3, 73, 0.822)'
    ],


    // Add more color schemes as needed
  ];

  const handleIconClick = () => {
    const nextColorSchemeIndex = (colorScheme + 1) % colorSchemes.length;
    setColorScheme(nextColorSchemeIndex);
  };

  return (
    <div className="app-container">
      <section className="locked-section">
        <CoolText></CoolText>

        <Header handleIconClick={handleIconClick} />

        <BackgroundGrid colorScheme={colorScheme} />
        <SectionBreakUp1/>


      </section>
      

      <section className="additional-content">
        <AdditionalSection />
      </section>
      <SectionBreak1>sadgsadg</SectionBreak1>
    </div>
  );
};

export default App;