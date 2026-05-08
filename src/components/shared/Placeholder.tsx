interface PlaceholderProps {
  label: string;
  variant?: string;
  ar?: string;
}

export default function Placeholder({ label, variant = '', ar }: PlaceholderProps) {
  return (
    <div className={`ph ${variant}`} style={ar ? { aspectRatio: ar } : undefined}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
