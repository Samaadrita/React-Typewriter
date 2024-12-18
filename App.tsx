import React, { useState, useEffect } from 'react';
import { ButtonCounter } from './components/ButtonCounter';

export const App = () => {
  const [sentence, setSentence] = useState<String>('');
  const [textToDisplay, setTextToDisplay] = useState<Array>([]);
  const [textToDisplays, setTextToDisplays] = useState<Array>([]);

  const textDisplay = () => {
    setTextToDisplay([...sentence]);
  };

  useEffect(() => {
    if (textToDisplay?.length > 0) {
      for (let i = 0; i < textToDisplay.length; i++) {
        const fg = textToDisplay.slice(i, 1);
        console.log(fg);
        textToDisplay.splice(i, 1);
        var id = setInterval(() => {
          setTextToDisplay([...textToDisplay]);
          setTextToDisplays((prev) => [...prev, fg]);
        }, 500);
        return () => {
          clearInterval(id);
        };
      }
    }
  }, [textToDisplay]);

  return (
    <div className="p-2">
      <input
        type="text"
        value={sentence}
        onChange={(e) => {
          setSentence(e.target.value);
          setTextToDisplay([]);
          setTextToDisplays([]);
        }}
      />
      &ensp;
      <button onClick={textDisplay}>Display</button>
      <br />
      {textToDisplays?.length > 0 && <p>{textToDisplays.join('')}</p>}
    </div>
  );
};
