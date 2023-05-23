import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconBattery = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--battery", className, iconSize, "IconBattery");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M14.781 6.25h-.875v-.875a1.54 1.54 0 0 0-1.531-1.531H2.75a1.54 1.54 0 0 0-1.531 1.531v5.25a1.54 1.54 0 0 0 1.531 1.531h9.625a1.54 1.54 0 0 0 1.531-1.531V9.75h.875v-3.5Zm-2.187 4.375a.219.219 0 0 1-.219.219H2.75a.219.219 0 0 1-.219-.219v-5.25a.219.219 0 0 1 .219-.219h9.625a.219.219 0 0 1 .219.219v5.25ZM3.844 6.25h1.312v3.5H3.844v-3.5Zm2.625 0H7.78v3.5H6.47v-3.5Z" /></svg>;
};
export default IconBattery;