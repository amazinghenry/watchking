import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About";
import Collections from "./components/Collections";
import 'bootstrap/dist/css/bootstrap.min.css';
import Testimonials from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <About />
      <Collections />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
