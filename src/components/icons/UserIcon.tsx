import { baseProps, type IconProps } from "./base";

export function UserIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    </svg>
  );
}
