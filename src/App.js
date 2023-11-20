import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FontAwesome from './components/FontAwesome'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
