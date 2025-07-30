import {BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { PasswordGenerator } from "./components/PasswordGenerator";
import { useDebounce } from "./components/useDebounce";
import "./components/style.css"
import { Greeting } from "./components/Greeting";
import { DeveloperCard } from "./components/DeveloperCard";
import { FruitList } from "./components/fruitList";
import { UserList } from "./components/UserList";
import { Card } from "./components/Card";
import { MoodBoardItem } from "./components/MoodBoardItem";
import FootballerSearch from "./components/FootballerSearch";
import { FruitsSearch } from "./components/FruitsSearch";
import { MegaNavbar } from "./components/Mega-navbar";
function App() {
  return (
    <Router>
      <nav className="nav-styles">
        <Link className="link-styles" to={'/meganavbar'}>Mega Navbar Comp</Link>
        <Link className="link-styles" to='/greeting'>Greeting Comp</Link>
        <Link className="link-styles" to='/developercard'>Developer Card Comp</Link>
        <Link className="link-styles" to='/fruitlist'>Fruit List Comp</Link>
        <Link className="link-styles" to='/userlist'>User List Comp</Link>
        <Link className="link-styles" to='/card'>Card Comp</Link>
        <Link className="link-styles" to='/moodboarditem'>Mood Board Item Comp</Link>
        <Link className="link-styles" to='/fruitsearch'>Fruit Search Comp</Link>
        <Link className="link-styles" to='passwordgenerator'>Password Generator Comp</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/meganavbar" element={<MegaNavbar />}></Route>
          <Route path="/greeting" element={<Greeting isLogged={true} name='Abdukadir' />}></Route>
          <Route path="/developercard" element={<DeveloperCard developer='Abdukadir' age={25} country='Somalia' />}></Route>
          <Route path="/fruitlist" element={<FruitList />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/card" element={<Card name={'Abdukadir'} title={'Web Developer'}  bio={'I am Junior Developer living in Mogadishu, now learning react from freeCodeCamp'}/>}></Route>
          <Route path="/moodboarditem" element={<MoodBoardItem color={'lightblue'} image={'https://i.pinimg.com/736x/46/c2/20/46c2205aeb90ab2646c12fa260ca12ba.jpg'}  description={'I am Junior Developer living in Mogadishu, now learning react from freeCodeCamp'}/>}></Route>
          <Route path="/fruitsearch" element={<FruitsSearch />}></Route>
          <Route path="passwordgenerator" element={<PasswordGenerator />}></Route>
        </Routes>
      </main>
    </Router>
  );
}



export default App;
