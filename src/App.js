import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Menu } from './Components/Main/Menu';
import { Main } from './Components/Main/Main';
import { Counter } from './Components/Main/Counter';
import { Footer } from './Components/Footer/Footer';
import { User } from './Components/Main/User';
import { Navbar } from './Components/Header/Navbar';
import { Post } from './Context/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/user" component={User} />
          <Route exact path="/post" component={Post} />
        </Switch>
      <Footer />
      </Router>
      {/* <Header /> */}
      {/* <Menu /> */}
      {/* <Main /> */}
      {/* <Counter /> */}
      {/* <User /> */}
      {/* <Footer /> */}
    
    </div>
  );
}

export default App;
