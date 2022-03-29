
import './App.css';
import Navbar from './component/Navbar';
import Postion from './component/Postion';
import PostionsGame from './context/PostionsGame';
import Modal from './component/Modal';
import LeftDice from './component/LeftDice';
import RightDice from './component/RightDice';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <PostionsGame>
        <Navbar />
        <Switch>
        <Route exact path='/'>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"50vh", justifyContent:"center"}}>

              <h1>Squirt Game</h1>
              <h5>Play and fun with your mates</h5>
            </div>
          </Route>
          <Route exact path='/position'>
            <Postion />
            <Modal />
          </Route>
          <Route exact path='/dice'>
            <div className='DiceGame' style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
              <LeftDice />
              <RightDice />
            </div>
          </Route>
        </Switch>
      </PostionsGame>
    </Router>
  );
}

export default App;
