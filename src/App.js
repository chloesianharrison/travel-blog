
import data from './data.js'
import './App.css';
import Navbar from './componants/Navbar.js'
import Card from './componants/Card.js';

const info = data.map(item => {
  console.log(item)
  return (
    <Card
      key={item.id}
      item={item}
    />
  )
});


function App() {

  return (
    <div className="App">
      <Navbar />
      {info}

    </div>
  );
}

export default App;
