
import './App.css';
import Navbar from './component/Navbar';
import Postion from './component/Postion';
import PostionsGame from './context/PostionsGame';
import Modal from './component/Modal';

function App() {
  return (
    <PostionsGame>
    <Navbar/>
    <Postion/>
    <Modal/>
    </PostionsGame>
  );
}

export default App;
