// fonts.ts
import { Outfit, Ovo } from "next/font/google";

export const ovoFont = Ovo({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-ovo",
});

export const outfitFont = Outfit({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
});
