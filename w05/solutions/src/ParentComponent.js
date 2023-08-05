import React, { useContext } from 'react';
import ColorContext from './ColorContext';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const color = useContext(ColorContext);
  const newColor = {...color, color: 'blue'};

  return (
    <ColorContext.Provider value={newColor}>
      <h2 style={{ color: newColor.color, backgroundColor: newColor.backgroundColor }}>
        ParentComponent with inherited background color and new text color
      </h2>
      <ChildComponent />
    </ColorContext.Provider>
  )
}
