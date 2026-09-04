import { baseProps, type IconProps } from "./base";

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
