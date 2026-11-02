import type { ControlProps } from "../Field";
import { Icon } from "../Icon";

interface ChoiceOption {
  value: string;
  label: string;
  icon: string;
}

interface ChoiceGroupProps {
  control: ControlProps;
  // Shared by the radio inputs so the browser treats them as one group.
  name: string;
  options: ChoiceOption[];
  value: string;
  onChange: (value: string) => void;
}

// Radio buttons drawn as pills.
export function ChoiceGroup({ control, name, options, value, onChange }: ChoiceGroupProps) {
  return (
    <div {...control} className="choice-group" role="radiogroup">
      {options.map((option) => (
        <label className="choice" key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <span className="choice__box">
            <Icon name={option.icon} />
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
}
