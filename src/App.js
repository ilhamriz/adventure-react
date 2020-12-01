import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/pages/Home';
import Destination from './component/pages/Destination';
import ScrollToTop from './component/ScrollToTop';
import Footer from './component/Footer';
import Gallery from './component/pages/Gallery';
import Contact from './component/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/adventure-react' exact component={Home}/>
          <Route path='/adventure-react/destination' component={Destination} />
          <Route path='/adventure-react/gallery' component={Gallery}/>
          <Route path='/adventure-react/contact' component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
