import * as React from "react";
import { LargeIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from '@justeattakeaway/pie-icons-configs/configs-react';
const IconSocialFacebookCircleFilledLarge = (props: LargeIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--facebook-circle-filled-large", className, iconSize, "IconSocialFacebookCircleFilledLarge");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="presentation" focusable="false"    {...allProps}><path fill="#242E30" d="M16 3.671a12.25 12.25 0 1 0 0 24.5 12.25 12.25 0 0 0 0-24.5Zm3.85 7.403h-1.138a1.294 1.294 0 0 0-1.46 1.426v1.689h2.493l-.402 2.625H17.25v6.282a8.75 8.75 0 0 1-2.817 0V16.77H12.15v-2.625h2.284v-1.96a3.175 3.175 0 0 1 3.403-3.5c.675.01 1.347.068 2.013.175v2.214Z" /></svg>;
};
export default IconSocialFacebookCircleFilledLarge;