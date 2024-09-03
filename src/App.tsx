import React from 'react';
import Listing from './components/Listing';
import { items } from './data/items';

const App: React.FC = () => {
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
};

export default App;
