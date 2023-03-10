import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs/:blogId' element={<BlogDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;