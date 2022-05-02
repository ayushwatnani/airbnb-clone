import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
