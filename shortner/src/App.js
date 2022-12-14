import logo from './logo.svg';
import './App.css';
import InputShortener from './InputShortener';

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <InputShortener setInputValue={setInputValue}/> 
    </div>
  );
}

export default App;
