import React from "react";
import MyButton from "./MyButton";

const FirstImpression = () => {
  return (
    <div className="fullwidth">
      <div className="cooking-text-div">
        <h1>DISCOVER THE WORLD OF</h1>
        <h1>FUSION COOKING</h1>
        <p>UNRAVEL THE WONDERS OF VEGETARIAN COOKING WITH US!</p>
        <MyButton text={"Sign Up"} link={""} />
      </div>
    </div>
  );
};

export default FirstImpression;
