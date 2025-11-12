import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { UrlObject } from "url";

export type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export type NavItemsType = {
	id: number;
	label: string;
	urlid: UrlObject;
	matchid: string;
}[];

export type NavigationBtnUiType = {
	children: ReactNode;
	url: UrlObject;
	className?: string;
	aria: string;
};
export type WorkingBtnUiType = {
	children: ReactNode;
	url: string;
	className?: string;
	aria: string;
	download?: true;
};

export type DetailsCardType = {
	id: number;
	icons: LucideIcon | IconType;
	heading: string;
	paragraph: string;
}[];

export type ToolsIconsType = string[];

export type TechStacksIconsType = string[];

export type ProjectsDetailsType = {
	id: number;
	img: string;
	prjectName: string;
	projectDescription: string;
	githubRepoLink: string;
	liveLink: string;
	techStacks: string[];
}[];
