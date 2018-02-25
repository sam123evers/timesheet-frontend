import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <TimeEntryWidget />
      </div>
    );
  }
}

class Dashboard extends Component {
  render() {
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
      </div>
    )
  }
}

class TimeEntryWidget extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var f = e.target
    console.log(f.projectName.value, f.resource.value, f.activity.value, f.date.value, f.startTime.value )
    var formData: {
      projectName: f.projectName.value,
      resource: f.resource.value,

    }
  }

  render() {
    return(
      <div className="time-entry-widget">
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="date">Date:</label>
          <input id="date" type="date"></input>
          

          <label htmlFor="startTime">Start Time: </label>
          <input id="startTime" type="time"></input>

          <label htmlFor="stopTime">Stop Time:</label>
          <input id="stopTime" type="time"></input>

          <label htmlFor="project-name">Project Name:</label>
          <select name="projectName" id="projectName">
            <option>Atlas</option>
            <option>Yedian</option>
          </select>

          <label htmlFor="resource">Contributer:</label>
          <select name="resource" id="resource">
            <option>Ricky</option>
            <option>Stephan</option>
            <option>Nelson</option>
            <option>Fred</option>
          </select>

          <label>Activity:</label>
          <input id="activity" type="text"></input>

          <label>Task Name:</label>
          <select>
            <option>React-Native</option>
            <option>Setup</option>
            <option>Planning</option>
            <option>Processing</option>
            <option>Recruitment</option>
            <option>Core-Model</option>
          </select>
        
          <input id="" type="submit"></input>
        </form>
      </div>
    )
  }
}
        

export default App;
