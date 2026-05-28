import "./SidebarButton.css";

export default function SidebarButton({
  label,
  active = false,
  background,
  activeBackground,
  color,
}) {
  return (
    <button
      className={`sidebar-button ${active ? "active" : ""}`}
      style={{
        background: active ? activeBackground : background,
        color,
      }}
    >
      {label}
    </button>
  );
}
