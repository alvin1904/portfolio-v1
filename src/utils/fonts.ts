/* @import url("https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Condensed:wght@300;400;700&display=swap"); */

import { Roboto_Condensed, Raleway } from "next/font/google";

export const RobotoFont = Roboto_Condensed({
  weight: ["300", "400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const RalewayFont = Raleway({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-raleway",
});
