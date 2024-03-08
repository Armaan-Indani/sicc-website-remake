export default function MyButton({ text, link }) {
  return (
    <div className="transparent-bg-button">
      <a href={link}>{text}</a>
    </div>
  );
}
