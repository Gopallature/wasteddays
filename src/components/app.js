import React, { Component } from "react";
import { form, FormControl, Button } from "react-bootstrap";
import "./app.css";
import Age from "./age.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "",
      showAge: false
    };
  }

  ChangeDate() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showAge: true });
  }

  render() {
    return (
      <div className="App">
        <form inline>
          <h2>Enter your Birth Date</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {""}
          <Button onClick={() => this.ChangeDate()}>Submit</Button>
          {this.state.showAge ? <Age date={this.state.birthday} /> : <div />}
        </form>
      </div>
    );
  }
}

export default App;
