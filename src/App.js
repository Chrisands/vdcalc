import React, { Component } from 'react';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">VD Calculator</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
