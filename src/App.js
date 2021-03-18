import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/about';
import Skills from './components/pages/skills';
import Contact from './components/pages/contact';
import Calculator from './components/pages/calculator';
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
           <Route path = '/' exact component = {Home} ></Route> 
           <Route path = '/about' exact component = {About} ></Route> 
           <Route path = '/skills' exact component = {Skills}></Route>
           <Route path = '/contact' exact component = {Contact}></Route>
           <Route path = '/calculator' exact component = {Calculator}></Route>   
        </Switch>  
      </Router>
    </>
  );
}

export default App;
