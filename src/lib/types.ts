import { ReactNode } from "react";
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
