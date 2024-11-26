import React, { forwardRef, useContext, ReactElement } from "react";
import { IconContext } from "./context";
import { IconProps, IconWeight } from "./types";

interface IconBaseProps extends IconProps {
  weights: Map<IconWeight, ReactElement>;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const { alt, color, size, weight, children, weights, ...restProps } = props;

  const {
    color: contextColor = "currentColor",
    size: contextSize,
    weight: contextWeight = "regular",
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox="0 0 256 256"
      {...restContext}
      {...restProps}
    >
      {!!alt && <title>{alt}</title>}
      {children}
      {weights.get(weight ?? contextWeight)}
    </svg>
  );
});

IconBase.displayName = "IconBase";

export default IconBase;
