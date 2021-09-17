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
        <Hero></Hero>
        <main>
          <Switch>
          <Route path='/Projects' component={Projects} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>

    </Router>
  );
}
// onclick event 
export default App;
