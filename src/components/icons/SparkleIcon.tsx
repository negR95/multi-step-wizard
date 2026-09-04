import { baseProps, type IconProps } from "./base";

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m12 3-1.2 3.3a7 7 0 0 1-4.2 4.2L3 12l3.6 1.5a7 7 0 0 1 4.2 4.2L12 21l1.2-3.3a7 7 0 0 1 4.2-4.2L21 12l-3.6-1.5a7 7 0 0 1-4.2-4.2L12 3Z" />
    </svg>
  );
}
