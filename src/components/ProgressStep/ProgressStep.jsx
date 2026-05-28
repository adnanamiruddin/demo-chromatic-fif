import "./ProgressStep.css";

export default function ProgressStep({
  title,
  active = false,
  completed = false,
  circleSize = "22px",
  activeColor = "#22c55e",
  inactiveColor = "#cbd5e1",
}) {
  let bg = inactiveColor;

  if (completed || active) {
    bg = activeColor;
  }

  return (
    <div className="step-item">
      <div
        className="step-circle"
        style={{
          width: circleSize,
          height: circleSize,
          background: bg,
        }}
      />

      <span>{title}</span>
    </div>
  );
}
