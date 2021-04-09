import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Header/Navbar';

const App = ({ children }) => {
	return (
		<div className="App  ">
			<header className="border-bottom">
				<Header />
				<Navbar />
			</header>
			<div className="container-fluid h-100">
				<div className="jumbotron">
					<div>{children}</div>
				</div>
			</div>

			<Footer
				className="align-self-end footer"
				style={{
					position: 'absolute',
					bottom: '0',
					left: '0',
					right: '0',
				}}
			/>
		</div>
	);
};

export default App;
