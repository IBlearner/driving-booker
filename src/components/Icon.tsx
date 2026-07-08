interface IconProps {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
}

// Thin wrapper around Google Material Icons (loaded via index.html).
export function Icon({ name, className, ...rest }: IconProps) {
  return (
    <span className={`material-icons${className ? ` ${className}` : ""}`} aria-hidden="true" {...rest}>
      {name}
    </span>
  );
}
