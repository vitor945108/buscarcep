import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import TestList from './components/TestList/TestList';
import Maca from "../src/images/maca.jpg";
import Pera from "../src/images/pera.webp";
import Uva from "../src/images/uva.webp";
import ExercicioList from './components/ExercicioLista/ExercicioLista';
import Equipe from './components/Equipe/Equipe';
import Eventos from './components/eventos/eventos';
import Use from './components/usuario/usuario';
import Inputusestate from './components/inpuntusestate/Inpuntusestate';
import Consumidorapi from './components/comsumidoapi/comsumidoapi';

function App() {
  
  return (
    <div className="App">
      {/* <Header/>
      <Main/>
      <Footer/> */}
      {/* {} */}
      {/* <Use/> */}
      {/* <Inputusestate/> */}
      <Consumidorapi/>
    </div>
  );
}

export default App;
