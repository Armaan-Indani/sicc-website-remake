import sicc from "../assets/images/sicc.png";
import "./HeroSection.css";

export default function Hero() {
  return (
    <div className="hero">
      <img
        src={sicc}
        alt=""
        style={{ borderRadius: "80px", border: "5px solid black" }}
      />
      <p>
        “Get ready to tantalize your taste buds, impress your loved ones, and
        nourish your body with our diverse array of mouth-watering veggie
        creations. Let's embark on this unforgettable culinary adventure
        together!”
      </p>
    </div>
  );
}
