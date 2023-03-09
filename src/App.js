import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <PostDetails />
    </div>
  );
}

export default App;
