import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconGeolocationLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--geolocation-large", className, iconSize, "IconGeolocationLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M6.156 12.973v2.047l3.404.875a9.012 9.012 0 0 1 6.571 6.571l.875 3.404h2.048l6.405-19.329-19.303 6.431Zm12.023 9.773-.639-1.75a10.763 10.763 0 0 0-6.51-6.501l-1.75-.639L22.65 9.35l-4.471 13.396Z" /></svg>;
};
export default IconGeolocationLarge;