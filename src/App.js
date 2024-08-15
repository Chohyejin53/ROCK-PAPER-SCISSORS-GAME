import React, { Component } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스2개 (타이틀 , 사진, 결과)
// 2. 버튼3개 (가위, 바위, 보 )
// 3. 버튼 클릭 시 클릭한 값이 박스에 보임
// 4. 클릭할때마다 랜덤하게 아이템 선택
// 5. 3번 4번의 결과를 가지고 누가 이겼는지 승패 결정
// 6. 지면 빨간색 /  이기면 초록색 / 무승부 검정

const choice = {
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnPWO96etIPIi7tY6AOm6xLijRFUrjjxBdA&s",
  },
  paper: {
    name: "paper",
    img: "https://dc1240h7n7gpb.cloudfront.net/resources/static/main/image/pa278.jpg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerSelect = this.randomChoice();
    const result = this.judgement(userSelect, computerSelect);

    this.setState({
      userSelect: userSelect,
      computerSelect: computerSelect,
      result: result,
    });
  };

  judgement = (user, computer) => {
    const userWin = { user: "win", computer: "lose" };
    const userLose = { user: "lose", computer: "win" };
    const userTie = { user: "tie", computer: "tie" };

    if (user.name === computer.name) {
      return userTie;
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? userWin : userLose;
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? userWin : userLose;
    } else if (user.name === "paper") {
      return computer.name === "rock" ? userWin : userLose;
    }
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    const { userSelect, computerSelect, result } = this.state;

    return (
      <>
        <div className="wrapper">
          <h1 className="title">ROCK-PAPER-SCISSORS GAME</h1>
          <div className="container">
            <Box title={"YOU"} item={userSelect} result={result.user} />
            <Box
              title={"COMPUTER"}
              item={computerSelect}
              result={result.computer}
            />
          </div>
          <div className="btn_box">
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>
            <button onClick={() => this.play("paper")}>보</button>
          </div>
        </div>
      </>
    );
  }
}
