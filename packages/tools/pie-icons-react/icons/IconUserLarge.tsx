import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconUserLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--user-large", className, iconSize, "IconUserLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M23.823 22.501a6.011 6.011 0 0 0-5.723-3.876H13.91a6.029 6.029 0 0 0-5.731 3.894l-1.182 3.316h1.83l.98-2.756a4.296 4.296 0 0 1 4.103-2.704H18.1a4.305 4.305 0 0 1 4.104 2.747l.971 2.757h1.838l-1.19-3.378Z" /><path fill="#242E30" d="M14.994 16.656a4.437 4.437 0 0 0 5.32-5.329 4.426 4.426 0 0 0-7.442-2.11 4.428 4.428 0 0 0 2.122 7.44Zm.481-7a2.704 2.704 0 1 1-2.1 2.153 2.704 2.704 0 0 1 2.1-2.118v-.035Z" /></svg>;
};
export default IconUserLarge;