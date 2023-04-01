import { Indie_Flower, Inconsolata } from "next/font/google";

const indie = Indie_Flower({
  subsets: ["latin"],
  variable: "--font-indie",
  weight: "400",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  weight: "400",
});


export {indie,inconsolata}