import sicc from "../assets/images/sicc.png";
import instagramlogo from "../assets/images/instagram-logo.png";
import facebooklogo from "../assets/images/facebook-logo.png";
import youtubelogo from "../assets/images/youtube-logo.png";
import whatsapplogo from "../assets/images/whatsapp-logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="contact-section" id="contact-us">
      <img src={sicc} alt="" height={"220rem"} />
      <div className="add-email">
        <h3 style={{ marginBottom: "5px" }}>ADDRESS:</h3>
        <p className="address">
          1225/E, Samir Apts, Deccan,
          <br /> Pune 411004 <br />
          (Maharashtra - INDIA)
        </p>
        <h3 style={{ marginBottom: "5px" }}>Email:</h3>
        <a
          href="mailto:shobhaindani@gmail.com"
          style={{ textDecoration: "none" }}
        >
          shobhaindani@gmail.com
        </a>
      </div>
      <div className="follow-us">
        <h3>Connect with us:</h3>
        <div className="socials-images">
          <a href="https://www.instagram.com/shobhaindani/">
            <img
              src={instagramlogo}
              alt=""
              className="contact-logo instagram"
            />
          </a>
          <a href="https://wa.me/+919850580183">
            <img src={whatsapplogo} alt="" className="contact-logo whatsapp" />
          </a>
          <a href="https://www.youtube.com/@shobhaindani984">
            <img
              src={youtubelogo}
              alt="youtubelogo"
              className="contact-logo youtube"
            />
          </a>

          <a href="https://www.facebook.com/ShobhaIndani/">
            <img
              src={facebooklogo}
              alt="fblogo"
              className="contact-logo facebook"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
