
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';

const App = ({children})=> {
  return (
    <div className="App">
      <header>
      <Header />
      <Navbar />
      </header>
      {/* <h1>Hello</h1> */}
      <div>{children}</div>
    </div>
  );
}

export default App;
