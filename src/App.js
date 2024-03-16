import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/HeroSection";
import Message from "./components/Message";
import Footer from "./components/Footer";
import FirstImpression from "./components/FirstImpression";
import ParallaxDiv from "./components/ParallaxDiv";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="body-div">
        <FirstImpression />
        <Hero />
        <Message
          text={
            "“It brings me immense joy to extend a warm invitation to all of you, passionate cooks and budding chefs alike, to come and embark on a delightful journey of vegetarian culinary excellence.”"
          }
        />
        <ParallaxDiv />
        <About />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
