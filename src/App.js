import NavBar from './components/NavBar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import FontAwesome from './components/FontAwesome'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createContext, useState } from 'react';
import './App.css';

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === null ? "dark" : null));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        <Header
          onChange={toggleTheme}
          checked={theme === 'dark'}
          theme={theme}
        />
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
