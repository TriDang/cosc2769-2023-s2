import React, { useContext } from 'react';
import ColorContext from './ColorContext';

export default function GrandChildComponent() {
  const {color, backgroundColor} = useContext(ColorContext);

  return (
    <h4 style={{ color: color, backgroundColor: backgroundColor }}>
      GrandChildComponent with inherited text color and new background color
    </h4>
  )
}
