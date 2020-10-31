import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person, { males, females } from "./file2";
import { MultiWelcome } from "./file3";

const { firstName, email } = person;

const personList = [...males, ...females];
const expandedList = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(personList);
console.log(expandedList);

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{upper("please uppcercase me")}</p>
      <h2>Ex 2</h2>
      <p>
        {firstName} {email}
      </p>
      <h2>Ex 3</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
