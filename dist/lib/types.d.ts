import { ComponentPropsWithoutRef, RefAttributes } from "react";
export type IconWeight = "regular" | "fill";
export interface IconProps extends ComponentPropsWithoutRef<"svg">, RefAttributes<SVGSVGElement> {
    alt?: string;
    color?: string;
    size?: string | number;
    weight?: IconWeight;
}
export type Icon = React.ForwardRefExoticComponent<IconProps>;
