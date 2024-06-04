
import data from './data.js'
import './App.css';
import Navbar from './componants/Navbar.js'
import Card from './componants/Card.js';
import Footer from './componants/Footer.js'

// const info = data.map(item => {
//   return (
//     <Card
//       key={item.id}
//       item={item}
//     />
//   )
// });


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  });

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        {cards}
      </div>
      <Footer />
    </div>
  );
}

export default App;
