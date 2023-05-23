import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconUpload = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--upload", className, iconSize, "IconUpload");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M5.926 5.051 5 4.124 7.23 1.875a1.085 1.085 0 0 1 1.54 0l2.231 2.223-.927.953-1.418-1.426V9.75H7.344V3.625L5.926 5.051ZM11.5 6.47H9.995V7.78H11.5a.219.219 0 0 1 .219.219v5.25a.219.219 0 0 1-.219.219h-7a.219.219 0 0 1-.219-.219V8a.219.219 0 0 1 .219-.219h1.505V6.47H4.5A1.54 1.54 0 0 0 2.969 8v5.25A1.54 1.54 0 0 0 4.5 14.781h7a1.54 1.54 0 0 0 1.531-1.531V8A1.54 1.54 0 0 0 11.5 6.469Z" /></svg>;
};
export default IconUpload;