import NavBar from './components/NavBar';
import Header from './components/Header';
import IndividualLab from './components/labs/IndividualLab';
import Footer from './components/Footer';
// import FontAwesome from './components/FontAwesome'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <main>
        <IndividualLab />
      </main>

      <Footer />
    </div>
  );
}

export default App;
