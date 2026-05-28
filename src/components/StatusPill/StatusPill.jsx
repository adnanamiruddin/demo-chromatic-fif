import "./StatusPill.css";

export default function StatusPill({
  label,
  color = "#22c55e",
  background = "#dcfce7",
  textColor = "#166534",
}) {
  return (
    <div
      className="status-pill"
      style={{
        background,
        color: textColor,
        borderColor: color,
      }}
    >
      <span
        className="status-pill-dot"
        style={{
          background: color,
        }}
      />

      {label}
    </div>
  );
}
