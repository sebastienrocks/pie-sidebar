import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconClockAlertLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--clock-alert-large", className, iconSize, "IconClockAlertLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 3.75a12.25 12.25 0 0 0-11.874 9.284l.403-.158a5.838 5.838 0 0 1 1.566-.323A10.5 10.5 0 1 1 9.49 24.224a2.914 2.914 0 0 1-.044 2.109A12.251 12.251 0 1 0 16 3.75Z" /><path fill="#242E30" d="M15.125 9v7.849l5.67 3.404.91-1.506-4.83-2.896V9h-1.75Z" /><path fill="#242E30" d="M6.602 26.535a1.312 1.312 0 1 0 0-2.625 1.312 1.312 0 0 0 0 2.625Z" /><path fill="#242E30" d="m5.15 14.512.744 7.613H7.31l.744-7.648a4.541 4.541 0 0 0-1.444-.227 4.5 4.5 0 0 0-1.461.262Z" /></svg>;
};
export default IconClockAlertLarge;