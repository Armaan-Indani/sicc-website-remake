import "./App.css";
import Header from "./Header";
import MyButton from "./MyButton";
import Hero from "./hero-section";

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
      </body>
    </div>
  );
}

export default App;
