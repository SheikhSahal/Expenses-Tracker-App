import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import { TransactionProvider } from './transContext';

class App extends Component {
  render() {
    return (
      <TransactionProvider>
        <Child />
      </TransactionProvider>
    )
  }
}

export default App;
