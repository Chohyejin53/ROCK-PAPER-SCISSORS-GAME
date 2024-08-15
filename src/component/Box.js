import React, { Component } from "react";

export default class Box extends Component {
  getResultClass = () => {
    return this.props.result === "win"
      ? "color-green"
      : this.props.result === "lose"
      ? "color-red"
      : "color-black";
  };

  render() {
    const { title, item, result } = this.props;
    return (
      <div className={`box ${this.getResultClass()}`}>
        <h1 className="title">{title}</h1>
        <img
          src={
            (item && item.img) ||
            "https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions.jpg"
          }
          alt={
            (item && item.name) ||
            "https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions.jpg"
          }
          width={150}
          height={150}
        />
        <p className="result-text">{result}</p>
      </div>
    );
  }
}
