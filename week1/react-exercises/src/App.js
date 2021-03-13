import React from 'react';
import HobbyList from './components/HobbyList';
import GuaranteeList from './components/GuaranteeList';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      {/* Exercise 1 */}
      <HobbyList />
      {/* Exercise 2 */}
      <GuaranteeList />
      {/* Exercise 3 */}
      <Counter />
    </div>
  );
};

export default App;
