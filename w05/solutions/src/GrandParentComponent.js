import React, { useContext } from 'react';
import ColorContext from './ColorContext';
import ParentComponent from './ParentComponent';

export default function GrandParentComponent() {
  const {color, backgroundColor} = useContext(ColorContext);

  return (
    <ColorContext.Provider value={{ color: color, backgroundColor: backgroundColor }}>
      <h1 style={{ color: color, backgroundColor: backgroundColor }}>
        GrandParentComponent with default ColorContext
      </h1>
      <ParentComponent />
    </ColorContext.Provider>
  )
}
