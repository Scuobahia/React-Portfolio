import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
