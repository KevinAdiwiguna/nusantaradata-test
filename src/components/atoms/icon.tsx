import { IconType } from "react-icons";

// Types
type IconProps = {
  Icon: IconType;
  className?: string;
  size?: number;
};

export function Icon({ Icon, className, size = 20 }: IconProps) {
  return <Icon className={className} size={size} />;
}
