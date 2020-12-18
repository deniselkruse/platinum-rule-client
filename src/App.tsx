import React from 'react';
import './App.css';
import Clock from './components/Clock';

let testProp: string = 'Am I getting passed to the Clock component?'
let optionalProp: string = 'You sure are!';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
      </div>
    </div>
  );
}

export default App;
