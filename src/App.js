import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>

      <div>
        <Header></Header>
        <main>
          <Switch>
          <Route exact path='/' component={Hero} />
          <Route exact path='/Projects' component={Projects} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>

    </Router>
  );
}
// onclick event 
export default App;
