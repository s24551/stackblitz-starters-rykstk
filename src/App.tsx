import { FC } from 'react';
import './style.css';
import React from 'react';
import FancyTable from './FancyTable';
import Multiple from './Multiple';
import JSXRules from './JSXRules';

const App = () => {
  return (
    <div>
      <h1>JSX</h1>
      <FancyTable n={5} />
      <Multiple name="Przykladowa trojca" number={3} />
      <JSXRules text="Czesc :)" />
    </div>
  );
};

export default App;
