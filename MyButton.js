function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here!"
  );
}

const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);

// 마이버튼을 루트에 렌더링한다.

// let obj1 = { a: "apple", b: "banana", c: "carrot" };

// console.log(obj1.a);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 20));

// const multiply = (a, b) => {
//   return a * b;
// };

// console.log(multiply(10, 20));
