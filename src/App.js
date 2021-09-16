import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
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
