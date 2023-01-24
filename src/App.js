
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Book from './routes/Book';
import Services from './routes/Services';
import Contact from './routes/Contact';
import BlogPageDemo from './routes/BlogPageDemo';
import Login from './routes/Login';
import FAQpage from './routes/FAQpage';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogPage1 from './components/Blog Pages/BlogPage1';
import BlogPage2 from './components/Blog Pages/BlogPage2';
import BlogPage3 from './components/Blog Pages/BlogPage3';
import BlogPage4 from './components/Blog Pages/BlogPage4';


function App() {
    return(
    <div className="App">
    

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/blog/page=1' element={<BlogPageDemo/>}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/book-a-collection' element={<Book />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/faq' element={<FAQpage />}/>
        <Route path='/blog/page1' element={<BlogPage1 />}/>
        <Route path='/blog/page2' element={<BlogPage2 />}/>
        <Route path='/blog/page3' element={<BlogPage3 />}/>
        <Route path='/blog/page4' element={<BlogPage4 />}/>
      </Routes>

      
      
    </div>
)}
export default App;
