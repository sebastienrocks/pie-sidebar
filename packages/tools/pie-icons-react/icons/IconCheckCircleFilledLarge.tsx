import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCheckCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--check-circle-filled-large", className, iconSize, "IconCheckCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M26.5 9.718 16.22 20.664a1.802 1.802 0 0 1-2.055.435 1.828 1.828 0 0 1-.605-.427l-3.754-4.217 1.313-1.164 3.727 4.209h.096l10.5-11.226A12.25 12.25 0 1 0 28.252 16a12.092 12.092 0 0 0-1.75-6.282Z" /></svg>;
};
export default IconCheckCircleFilledLarge;