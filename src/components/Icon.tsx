interface IconProps {
  name: string;
  className?: string;
}

// Thin wrapper around Google Material Icons (loaded via index.html).
export function Icon({ name, className }: IconProps) {
  return (
    <span className={`material-icons${className ? ` ${className}` : ""}`} aria-hidden="true">
      {name}
    </span>
  );
}
