import "./About.css";
import shobhaimg from "../assets/images/shobhaindani.jpg";
import mitalimg from "../assets/images/mitalindani.jpg";
import anuimg from "../assets/images/anuradhaindani.jpg";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const person_imgs = document.querySelectorAll(".person-picture");
    console.log(person_imgs);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });

    person_imgs.forEach((img) => {
      observer.observe(img);
    });

    observer.observe(person_imgs[0]);
  }, []);

  return (
    <>
      <div className="heading" id="about">
        <h1>About your instructors!</h1>
      </div>
      <div className="aboutBody">
        <div className="row">
          <div className="img-holder">
            <img
              src={shobhaimg}
              className="person-picture shobha-img"
              alt="Shobha Indani"
            />
          </div>
          <div className="info-div">
            <h3>SHOBHA INDANI </h3>
            <p>
              Shobha Indani, a renowned culinary expert and entrepreneur from
              Pune, Maharashtra, has transformed cooking with innovation and
              passion. With over 43 years of experience, she's an accomplished
              author, teacher, and judge, having conducted record-breaking
              cooking lessons and earned prestigious awards. Beyond her culinary
              prowess, she's a philanthropist, supporting various social causes.
              Her legacy continues digitally, as her Cookery Classes transition
              to webinars and apps, sharing her expertise worldwide, with a
              diverse range of courses on offer.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="info-div">
            <h3>MITAL INDANI </h3>
            <p>
              Mital Indani, an accomplished cake icing specialist and
              entrepreneur with a Diploma in Dietetics and Health Nutrition,
              redefines cake decoration as an artistic expression. Her creative
              flair and resolute dedication have propelled Shobha Indani's
              Cookery Classes to success, infusing cake design with innovation.
              As a guiding presence, Mital passionately assists students,
              ensuring a comprehensive and enriching learning experience
              throughout the course.
            </p>
          </div>
          <div className="img-holder">
            <img
              src={mitalimg}
              className="person-picture mital-img"
              alt="Mital Indani"
            />
          </div>
        </div>

        <div className="row">
          <div className="img-holder">
            <img
              src={anuimg}
              className="person-picture anu-img"
              alt="Anuradha Indani"
            />
          </div>
          <div className="info-div">
            <h3>ANURADHA INDANI </h3>
            <p>
              Anuradha Indani is an accomplished entrepreneur and expert in
              salad decoration. Her creative approach to presenting salads has
              transformed the perception of healthy eating aesthetics. With her
              invaluable contributions to Shobha Indani's Cookery Classes,
              Anuradha has not only enriched people's dining experiences with
              visually captivating and nourishing salads but also plays a
              crucial role in program design. Her accessibility and readiness to
              assist with any culinary queries across various modules further
              solidify her importance within the program.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
