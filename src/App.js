import logo from './logo.svg';
import './App.css';
import './composants/Header'
import Header from './composants/Header.js';
import Formulaire from './composants/Formulaire.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carte from './composants/Carte.js';
import ListeCarte from './composants/ListeCarte.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Formulaire></Formulaire>
      {/* <ListeCarte></ListeCarte> */}
    </div>
  );
}

export default App;
