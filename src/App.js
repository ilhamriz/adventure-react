import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
