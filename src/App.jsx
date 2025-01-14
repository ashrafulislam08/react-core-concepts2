import "./App.css";
import Counter from "./components/Counter";
import Friends from "./components/Friends";
import Team from "./components/Team";
import Users from "./components/Users";

function App() {
  function handleClick() {
    alert("Button clicked");
  }
  const handleClick2 = () => {
    alert("Button2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concepts</h3>
      <Friends />
      {/* <Users /> */}
      <Team />
      <Counter />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Button2 Me</button>
      <button onClick={() => addToFive(3)}>Add Five</button>
    </>
  );
}

export default App;
