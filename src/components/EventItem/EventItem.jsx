import "./EventItem.css";

export default function EventItem({
  time = "10:12:02",
  message = "Event received",
  background = "#dbeafe",
  color = "#1e3a8a",
  borderColor = "#bfdbfe",
  fontSize = "14px",
  padding = "8px 14px",
}) {
  return (
    <div className="event-item">
      <span className="event-time">{time}</span>

      <span
        className="event-badge"
        style={{
          background,
          color,
          borderColor,
          fontSize,
          padding,
        }}
      >
        {message}
      </span>
    </div>
  );
}
