
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import './App.css';
import Dashboard from './components/layout/Dashboard';
import bg from './pokedexbg.png'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Pokemon from './components/pokemon/Pokemon';

function App() {
  return (
    <Router>        
        <div className="App" style={{background: `url(${bg})`}}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path= "/pokemon/:id" component={Pokemon}/>
              
            </Switch>
            
          </div>
          
        </div>
     </Router>
  );
}

export default App;
