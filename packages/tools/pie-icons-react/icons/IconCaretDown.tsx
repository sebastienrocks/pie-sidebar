import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconCaretDown = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--caret-down", className, iconSize, "IconCaretDown");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M11.92 3.713H4.045a1.313 1.313 0 0 0-1.041 2.056l4.051 5.941a1.321 1.321 0 0 0 1.085.577 1.312 1.312 0 0 0 1.085-.612l3.763-5.897a1.25 1.25 0 0 0 .16-1.26 1.312 1.312 0 0 0-1.228-.805Zm-3.78 7.262-4.06-5.95h7.875l-3.815 5.95Z" /></svg>;
};
export default IconCaretDown;