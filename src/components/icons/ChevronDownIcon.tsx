import { baseProps, type IconProps } from "./base";

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
