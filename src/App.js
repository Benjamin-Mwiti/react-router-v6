import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <h1>Net Ninja React Router v6</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            {/* <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} /> */}
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
