import logo from './logo.svg';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/homeSection';
import Services from './components/serviceSection';
import About from './components/About';

function App() {
  return (
  <>
      <Navbar/>
    <Home/>
    <Services/>
    <About />  
</>
  );
}

export default App;
