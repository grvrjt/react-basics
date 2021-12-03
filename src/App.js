import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav" heroName="Batman">
        <p>This para for batman</p>
      </Greet>
      <Greet name="Suarav" heroName="Superman">
        <p>This para for Superman</p>
      </Greet>
      <Greet name="Korav" heroName="Wonder Woman">
        <p>This para for Woman</p>
      </Greet>

      <Welcome name="Gaurav">
        <p>This para for batman</p>
      </Welcome>
      <Welcome name="Saurav" />
      <Welcome name="Kaurav" />
      <Message />
      <Counter /> */}

      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
