import React from 'react';
import ReactDOM from 'react-dom';
import UnderConstruction from './UnderConstruction';

it('UnderConstruction renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UnderConstruction />, div);
});
