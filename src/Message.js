import "./Message.css";

export default function Message({ text }) {
  return (
    <div className="message-div">
      <p>{text}</p>
      <p style={{ alignSelf: "flex-end" }}>-Shobha Indani</p>
    </div>
  );
}
