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

export type CustomBtnUiType = {
	children: ReactNode;
	url: UrlObject;
	className?: string;
	aria: string;
};
