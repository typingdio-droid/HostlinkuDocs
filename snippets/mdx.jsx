const CONFIG = {
  note: { color: "#3b82f6", label: "Catatan", icon: "info" },
  info: { color: "#3b82f6", label: "Info", icon: "info" },
  tip: { color: "#10b981", label: "Tips", icon: "tip" },
  important: { color: "#8b5cf6", label: "Penting", icon: "important" },
  warning: { color: "#eab308", label: "Peringatan", icon: "warning" },
  caution: { color: "#ef4444", label: "Hati-hati", icon: "warning" },
  error: { color: "#ef4444", label: "Error", icon: "warning" },
};

const PATHS = {
  info: "M12 16v-4m0-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  tip: "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z",
  important: "M12 8v5m0 3h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
  warning: "M12 8v5m0 3h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z",
};

function Icon({ name, color }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name] || PATHS.info} />
    </svg>
  );
}

export const Callout = ({ type = "note", title, children }) => {
  const cfg = CONFIG[type] || CONFIG.note;
  return (
    <div className={`hl-callout hl-callout-${type}`} style={{ "--hl-callout-color": cfg.color }}>
      <span className="hl-callout-icon"><Icon name={cfg.icon} color={cfg.color} /></span>
      <div className="hl-callout-body">
        <div className="hl-callout-title">{title || cfg.label}</div>
        <div className="hl-callout-content">{children}</div>
      </div>
    </div>
  );
};

export const Steps = ({ children }) => <div className="hl-steps">{children}</div>;
