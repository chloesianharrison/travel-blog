
import data from './data.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Travel blog</h1>
      <h1>{data[0].title}</h1>
    </div>
  );
}

export default App;
