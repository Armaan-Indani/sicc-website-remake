import "./NavBar.css";
// import "../App.css";
export default function NavBar() {
  return (
    <div className="App-header">
      <a href="./">Home</a>
      <a href="./">Our Cookery Courses</a>
      <a href="#about">About Us</a>
      {/* <a href="">FAQs</a> */}
      <a href="https://www.amazon.in/s?k=shobha+indani&crid=3DQBIKVQBVPWZ&sprefix=shobha+indani+%2Caps%2C209&ref=nb_sb_noss_2">
        Books
      </a>
      <a href="#contact-us">Contact</a>
    </div>
  );
}
