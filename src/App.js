import "./App.css";
import Header from "./Header";
import MyButton from "./MyButton";
import Hero from "./HeroSection";
import Message from "./Message";
import cookingpan from "./assets/images/cooking-pan.jpg";
import indianthaliimg from "./assets/images/indian-thali.jpg";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <div className="cooking-text-div">
          <h1>DISCOVER THE WORLD OF</h1>
          <h1>FUSION COOKING</h1>
          <p>UNRAVEL THE WONDERS OF VEGETARIAN COOKING WITH US!</p>
          <MyButton text={"Sign Up"} link={""} />
        </div>
        <Hero />
        <Message
          text={
            "“It brings me immense joy to extend a warm invitation to all of you, passionate cooks and budding chefs alike, to come and embark on a delightful journey of vegetarian culinary excellence.”"
          }
        />
        <div className="parralax-div">
          <img src={cookingpan} alt="" className="cooking-pan-img" />
          {/* <img src={indianthaliimg} alt="" className="indian-thali-img" /> */}
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
