import {
	GraduationCap,
	LucideBriefcaseBusiness,
	Presentation,
} from "lucide-react";

import {
	DetailsCardType,
	NavItemsType,
	TechStacksIconsType,
	ToolsIconsType,
} from "./types";

export const navItems: NavItemsType = [
	{ id: 1, label: "Home", urlid: { pathname: "/", hash: "#" }, matchid: "#" },
	{
		id: 2,
		label: "About me",
		urlid: { pathname: "/", hash: "about-me" },
		matchid: "about-me",
	},
	{
		id: 3,
		label: "Projects",
		urlid: { pathname: "/", hash: "my-projects" },
		matchid: "my-projects",
	},
	{
		id: 4,
		label: "Contact",
		urlid: { pathname: "/", hash: "contact" },
		matchid: "contact",
	},
];

export const detailsCardData: DetailsCardType = [
	{
		id: 1,
		heading: "Education",
		paragraph: "Frontend Development from Central Institute of technology",
		icons: GraduationCap,
	},
	{
		id: 2,
		heading: "Experience",
		paragraph: "Web Developer and Designer at Eme Academy Institute",
		icons: LucideBriefcaseBusiness,
	},
	{
		id: 3,
		heading: "Projects",
		paragraph: "Developed more than five innovative projects",
		icons: Presentation,
	},
];

export const toolsIcons: ToolsIconsType = [
	"/icons/vs-code.svg",
	"/icons/figma.png",
	"/icons/git.svg",
	"/icons/github1.png",
];

export const techStacksIcons: TechStacksIconsType = [
	"/techstacks/html.svg",
	"/techstacks/css.svg",
	"/techstacks/js.svg",
	"/techstacks/ts.png",
	"/techstacks/bs.png",
	"/techstacks/reactjs.svg",
	"/techstacks/nextjs.png",
	"/techstacks/tailwindcss.svg",
	"/techstacks/jotai.png",
	"/techstacks/gsap.png",
	"/techstacks/reacthookform.png",
	"/techstacks/zod.svg",
];
