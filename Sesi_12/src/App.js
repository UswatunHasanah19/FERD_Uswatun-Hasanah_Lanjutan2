import React from "react";
import './App.css'
import Clock from './component/Clock'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Realtime CLOCK</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <hr />
        <Clock />
      </div>
    );
  }
  }
export default App;