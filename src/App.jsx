import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import IntroductionComponent from './components/IntroductionComponent';
import VariablesComponent from './components/VariablesComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router> {/* Use the alias 'Router' here */}
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} >
            <Route path="introduction" element={<IntroductionComponent />} />
            <Route path="variables" element={<VariablesComponent />} />
          </Route>
          
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
