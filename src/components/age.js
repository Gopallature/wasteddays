import React, { Component } from "react";
import "./app.css";

class Age extends Component {
  wastedTime(date) {
    let today = new Date().getTime();
    let bday = new Date(date).getTime();
    let livedSeconds = Math.abs(today - bday);

    let days = Math.floor(livedSeconds / (1000 * 3600 * 24));
    let years = Math.floor(days / 365);
    days = days - years * 365;
    let months = Math.floor(days / 30);
    days -= months * 30;

    return `${years} years ${months} months ${days} days on Earth`;
  }
  render() {
    return (
      <div>
        <h2>{this.props.date}</h2>

        <h3>Succesfully Wasted {this.wastedTime(this.props.date)} </h3>

        <img
          src="https://images.unsplash.com/photo-1593007791459-4b05e1158229?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          className="emoji"
          alt="emo-ji"
        />
      </div>
    );
  }
}

export default Age;
