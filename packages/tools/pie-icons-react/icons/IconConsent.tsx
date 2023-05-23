import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconConsent = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--consent", className, iconSize, "IconConsent");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M13.924 11.57v-7c0-.84-.691-1.531-1.531-1.531h-8.75c-.84 0-1.532.691-1.532 1.531v7h-.849v1.313h13.502V11.57h-.84Zm-10.5 0v-7c0-.122.096-.219.218-.219h8.75c.123 0 .22.097.22.22v7H3.423Z" /><path fill="#242E30" d="m10.126 5.541-3.123 3.37-1.085-1.226-.98.875L5.97 9.724l.306.341a.993.993 0 0 0 1.453 0l.315-.341 3.045-3.281-.963-.893v-.009Z" /></svg>;
};
export default IconConsent;