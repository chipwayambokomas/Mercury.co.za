
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import About from './routes/About';
import Book from './routes/Book';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Blog from './routes/Blog';
import Login from './routes/Login';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/book-a-collection' element={<Book />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>

      
    </div>
  );
}

export default App;
