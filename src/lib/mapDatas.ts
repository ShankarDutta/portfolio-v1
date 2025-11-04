import { NavItemsType } from "./types";

export const navItems: NavItemsType = [
	{ id: 1, label: "Home", urlid: { pathname: "/", hash: "#" }, matchid: "/" },
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
