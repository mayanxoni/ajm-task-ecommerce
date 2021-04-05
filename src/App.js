
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';

const App = ({children})=> {
  
  return (
    <div className="App d-flex flex-column">
      <header className="border-bottom">
      <Header />
      <Navbar />
      </header>
      <div className="container-fluid">
        <div className="jumbotron">
           <div>{children}</div>
        </div>
      </div>
      <footer className=" align-items-end w-100">
      <Footer />
      </footer>
    </div>
  );
}

export default App;
