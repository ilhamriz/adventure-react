import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/pages/Home';
import Destination from './component/pages/Destination';
import ScrollToTop from './component/ScrollToTop';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/destination' component={Destination}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
