import { Route, Switch } from 'react-router-dom';
import './App.css';
import Basket from './components/basket/Basket';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/basket" component={Basket}/>
      </Switch>
    </div>
  );
}

export default App;
