import React from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Task header="Hello" description="Description"/>
          <Task header="Hello" description="Description"/>
          <Task header="Hello" description="Description"/>

      </header>
    </div>
  );
}

class Task extends React.Component {
    render() {
        let description = this.props.description;
        let header = this.props.header;
        console.log(description)

        return (
            <div className="Task">
                <h1>{header}</h1>
                <p className="Task-description">{description}</p>
                <div className="Task-buttons">
                    <TaskButton buttonName="Delete"/>
                    <TaskButton buttonName="Add"/>
                </div>
            </div>
        )
    }
}

class TaskButton extends React.Component{
    render(){
        let buttonName = this.props.buttonName
        let button = <button
            className="Task-button"
            onClick={() => alert("I am an alert box!")} title={buttonName}>{buttonName}</button>
        return (button)
    }
}

export default App;
