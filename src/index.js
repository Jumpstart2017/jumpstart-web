import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';

function App() {
  return (
    <Button raised color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
