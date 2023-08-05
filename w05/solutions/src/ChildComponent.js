import React, { useContext } from 'react';
import ColorContext from './ColorContext';
import GrandChildComponent from './GrandChildComponent';

export default function ChildComponent() {
  const color = useContext(ColorContext);
  const newColor = {...color, backgroundColor: 'grey'};

  return (
    <ColorContext.Provider value={newColor}>
      <h3 style={{ color: newColor.color, backgroundColor: newColor.backgroundColor }}>
        ChildComponent with inherited text color and new background color
      </h3>
      <GrandChildComponent />
    </ColorContext.Provider>
  )
}
