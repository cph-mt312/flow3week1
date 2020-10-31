import "./App.css";
import Count from "./Count";
import ChuckNorrisJoke from "./ChuckNorrisJoke";
import DadJoke from "./DadJoke";
import Members from "./ListDemo";

function App() {
  return <div className="App">
    <Count init={0} increment={5} />
    <ChuckNorrisJoke />
    <DadJoke />
    <Members />
  </div>;
}

export default App;
