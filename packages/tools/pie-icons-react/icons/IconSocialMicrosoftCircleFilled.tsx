import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialMicrosoftCircleFilled = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--microsoft-circle-filled", className, iconSize, "IconSocialMicrosoftCircleFilled");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><g clipPath="url(#prefix__clip0_2820_3487)"><path fill="#242E30" d="M8 1.175A6.781 6.781 0 1 0 14.78 8 6.79 6.79 0 0 0 8 1.175Z" /><path fill="#fff" d="M7.71 11H5V8.285h2.726L7.71 11Z" /><path fill="#fff" d="M11 11H8.274V8.285H11V11Z" /><path fill="#fff" d="M7.71 7.715H5V5h2.726L7.71 7.715Z" /><path fill="#fff" d="M11 7.715H8.274V5H11v2.715Z" /></g><defs><clipPath id="prefix__clip0_2820_3487"><rect width={14} height={14} fill="#fff" transform="translate(1 1)" /></clipPath></defs></svg>;
};
export default IconSocialMicrosoftCircleFilled;