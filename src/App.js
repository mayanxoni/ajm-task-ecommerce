
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';

const App = ({children})=> {
  return (
    <div className="App">
      <header>
      <Header />
      <Navbar />
      </header>
      
      <div>{children}</div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
