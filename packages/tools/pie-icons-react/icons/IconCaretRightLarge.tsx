import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconCaretRightLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--caret-right-large", className, iconSize, "IconCaretRightLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="m23.875 14.425-14-8.671A1.654 1.654 0 0 0 9 5.5a1.689 1.689 0 0 0-1.689 1.68v17.64a1.68 1.68 0 0 0 2.625 1.409l13.939-8.96a1.68 1.68 0 0 0 0-2.844ZM9.061 24.689V7.31L22.87 15.86 9.06 24.689Z" /></svg>;
};
export default IconCaretRightLarge;