import "./Card.css";

export default function Card({
  title,
  subtitle,
  children,
  padding = "24px",
  borderRadius = "24px",
}) {
  return (
    <div
      className="card"
      style={{
        padding,
        borderRadius,
      }}
    >
      <h2>Title Now: {title}</h2>

      {subtitle && <p>Description is: {subtitle}</p>}

      <div className="card-content">{children}</div>
    </div>
  );
}
