import * as React from "react";
import { RegularIconProps } from "../types";
// @ts-ignore
import { getSvgProps } from './configs-react';
const IconFlagSlovakia = (props: RegularIconProps) => {
  const {
    className,
    iconSize,
    width,
    height,
    ...remainingProps
  } = props;
  const moreProps = getSvgProps("pie-icon pie-icon--slovakia", className, iconSize, "IconFlagSlovakia");
  const allProps = {
    ...remainingProps,
    ...moreProps
  };
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" role="presentation" focusable="false"    {...allProps}><path fill="#fff" d="M2.745 5.602v.444c-.007.575-.028 1.15-.017 1.725.018.98.36 1.84 1.006 2.577l.03.04c.105.105.207.213.316.314.449.418.962.744 1.508 1.018.058.029.117.055.173.086.036.02.066.018.103 0 .737-.352 1.416-.787 1.972-1.395a.13.13 0 0 1 .013-.012l.012-.01.104-.127a3.902 3.902 0 0 0 .898-2.03c.023-.172.035-.345.036-.52-.002-.577-.012-1.155-.02-1.733 0-.101-.007-.202-.01-.303v-.074h5.71a7.003 7.003 0 0 0-13.157 0h1.323Zm.202 1.111c.002-.309.01-.617.024-.926.019-.443.046-.885.07-1.328a.459.459 0 0 1 .009-.05h5.529c.011.146.025.288.033.43.055.93.071 1.861.073 2.793a3.81 3.81 0 0 1-.377 1.71c-.058.118-.13.228-.195.343-.024.04-.047.083-.073.122A4.565 4.565 0 0 1 7 10.878a7.024 7.024 0 0 1-1.135.689c-.035.017-.064.021-.102.003-.577-.284-1.116-.624-1.585-1.068a4.176 4.176 0 0 1-.641-.77 1.783 1.783 0 0 1-.015-.025l-.012-.023a2.601 2.601 0 0 1-.242-.442 5.232 5.232 0 0 1-.065-.155 3.326 3.326 0 0 1-.25-1.12c-.013-.418-.01-.836-.007-1.254Z" /><path fill="#D80027" d="m7.861 10.389-.012.01a.13.13 0 0 0-.013.012c-.556.608-1.235 1.043-1.972 1.396-.037.017-.067.018-.103-.001-.056-.03-.115-.057-.173-.086a6.379 6.379 0 0 1-1.508-1.018c-.109-.101-.211-.209-.317-.313l-.084.002h-2.26a7.003 7.003 0 0 0 13.162 0H7.98l-.118-.002Z" /><path fill="#0052B4" d="M3.763 10.389c-.01-.014-.018-.028-.03-.04A3.913 3.913 0 0 1 2.729 7.77c-.011-.575.01-1.15.017-1.725v-.444H1.422a7.03 7.03 0 0 0-.003 4.79h2.26l.084-.003Z" /><path fill="#0052B4" d="M14.58 5.602H8.867v.074c.004.1.01.202.011.303.008.578.018 1.156.02 1.734 0 .174-.013.347-.036.52a3.876 3.876 0 0 1-.898 2.03c-.034.041-.07.083-.104.126l.118.002h6.602a7.03 7.03 0 0 0-.002-4.789Z" /><path fill="#D80027" d="M3.204 9.087a5.232 5.232 0 0 0 .094.22c.06.13.132.257.213.377.04-.062.08-.125.124-.184.044-.06.093-.117.147-.168a.659.659 0 0 1 .339-.19.713.713 0 0 1 .722.29c.019.024.035.05.056.078a2.755 2.755 0 0 1 .19-.344 1.658 1.658 0 0 1 .182-.22 1.12 1.12 0 0 1 .292-.207V7.594c-.51-.01-1.005.015-1.494.164v-.853c.485.152.981.176 1.487.163v-.771a3.44 3.44 0 0 0-1.176.164v-.856c.336.11.682.162 1.034.167h.14a3.202 3.202 0 0 0-.052-.557c-.03-.182-.063-.363-.094-.541h.812c-.07.359-.142.72-.151 1.098.406.008.795-.044 1.175-.166v.854a3.493 3.493 0 0 0-1.171-.164v.772c.502.014.998-.01 1.486-.164v.854c-.484-.149-.98-.172-1.49-.165L6.064 8.74c.324.16.506.446.66.768.024-.033.04-.058.059-.081a.715.715 0 0 1 .726-.284.645.645 0 0 1 .32.177c.115.105.202.233.283.365.065-.115.137-.225.195-.343a3.81 3.81 0 0 0 .377-1.71 48.631 48.631 0 0 0-.073-2.793c-.008-.142-.022-.284-.033-.43h-5.53a.459.459 0 0 0-.008.05c-.024.443-.051.885-.07 1.328-.014.309-.022.617-.024.926-.003.418-.006.836.008 1.253.013.388.106.762.25 1.121Z" /><path fill="#0052B4" d="M7.83 9.32a.645.645 0 0 0-.32-.177.715.715 0 0 0-.726.284l-.06.08c-.153-.321-.335-.606-.659-.767a.734.734 0 0 0-.355-.036c-.05.01-.098.023-.147.035a1.12 1.12 0 0 0-.357.276 1.465 1.465 0 0 0-.152.205c-.057.093-.11.19-.155.29-.02-.029-.037-.054-.056-.078a.713.713 0 0 0-.722-.29.659.659 0 0 0-.34.19 1.184 1.184 0 0 0-.146.168c-.043.059-.084.122-.124.184l.012.023a1.783 1.783 0 0 0 .033.056c.178.27.387.518.623.739.469.444 1.008.784 1.585 1.068.038.018.067.014.102-.003.399-.197.78-.42 1.135-.689A4.565 4.565 0 0 0 8.04 9.807c.026-.04.049-.082.073-.122a1.643 1.643 0 0 0-.283-.365Z" /><path fill="#FFFDFD" d="M5.71 8.704a.734.734 0 0 1 .355.036l.003-1.147c.51-.007 1.007.016 1.49.165v-.854c-.487.154-.983.178-1.485.164v-.772c.396-.012.792.043 1.17.164v-.854c-.379.122-.768.174-1.174.166.01-.378.081-.74.15-1.098h-.81c.03.178.063.36.093.541.029.182.053.365.051.557h-.139a3.484 3.484 0 0 1-1.034-.167v.856a3.44 3.44 0 0 1 1.176-.164v.771c-.506.013-1.002-.01-1.487-.163v.853c.49-.149.985-.173 1.494-.164V8.74c.049-.012.097-.025.147-.035Z" /></svg>;
};
export default IconFlagSlovakia;