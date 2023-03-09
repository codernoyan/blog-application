import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/post/:postId' element={<PostDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;