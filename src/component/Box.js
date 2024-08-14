import React from "react";

const Box = (props) => {
  const getResultClass = () => {
    return props.result === "win"
      ? "color-green"
      : props.result === "lose"
      ? "color-red"
      : "color-black";
  };

  return (
    <div className={`box ${getResultClass()}`}>
      <h1 className="title">{props.title}</h1>
      <img
        src={
          (props.item && props.item.img) ||
          "https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions.jpg"
        }
        alt={
          (props.item && props.item.name) ||
          "https://www.practiceportuguese.com/wp-content/uploads/2020/06/asking-questions.jpg"
        }
        width={150}
        height={150}
      />
      <p className="result-text">{props.result}</p>
    </div>
  );
};

export default Box;
