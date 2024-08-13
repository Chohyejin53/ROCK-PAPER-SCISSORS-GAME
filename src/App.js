import { useState } from "react";
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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [ComputerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체에 있는 키값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <>
      <div className="wrapper">
        <h1 className="title">ROCK-PAPER-SCISSORS GAME</h1>
        <div className="container">
          <Box title={"YOU"} item={userSelect} result={result.user} />
          <Box
            title={"COMPUTER"}
            item={ComputerSelect}
            result={result.computer}
          />
        </div>
        <div className="btn_box">
          <button onClick={() => play("scissors")}>가위</button>
          <button onClick={() => play("rock")}>바위</button>
          <button onClick={() => play("paper")}>보</button>
        </div>
      </div>
    </>
  );
}

export default App;
