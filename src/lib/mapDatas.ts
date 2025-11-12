import {
	GraduationCap,
	LucideBriefcaseBusiness,
	Presentation,
} from "lucide-react";

import {
	DetailsCardType,
	NavItemsType,
	ProjectsDetailsType,
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

export const projectsDetails: ProjectsDetailsType = [
	{
		id: 1,
		img: "/projects/projects1.png",
		prjectName: "Codecraft",
		projectDescription: `CodeCraft is a modern frontend playground built with React and Next.js that lets users write and preview HTML, CSS, and JS in real time. `,
		githubRepoLink: "https://github.com/ShankarDutta/codecraft-webapp",
		liveLink: "https://codecraft-v1.netlify.app/",
		techStacks: [
			"Next Js",
			"React Js",
			"Type Script",
			"Tailwind Css",
			"Swipper Js",
			"Sadhcn Ui",
			"Magic Ui",
		],
	},

	{
		id: 2,
		img: "/projects/projects2.png",
		prjectName: "Techureon Digital Agency",
		projectDescription: `Techureon is a modern digital agency offering web development, UI/UX, and marketing through a sleek frontend app showcasing our creative work.`,
		githubRepoLink: `https://github.com/ShankarDutta/techureon-digital-webapp`,
		liveLink: "https://techureon-digital-webapp.vercel.app/",
		techStacks: [
			"Next Js",
			"React Js",
			"Type Script",
			"Tailwind Css",
			"Swipper Js",
			"Sadhcn Ui",
			"Magic Ui",
		],
	},

	{
		id: 3,
		img: "/projects/projects3.png",
		prjectName: "Personal Protfolio",
		projectDescription: `A modern and responsive personal portfolio website that highlights my work, skills, and projects with a clean design and smooth user experience.`,
		githubRepoLink: "https://github.com/ShankarDutta/portfolio-v1",
		liveLink: "https://medlixhealth.netlify.app/", //change the link
		techStacks: [
			"Next Js",
			"React Js",
			"Type Script",
			"Tailwind Css",
			"Swipper Js",
			"Sadhcn Ui",
			"Magic Ui",
		],
	},

	{
		id: 4,
		img: "/projects/projects4.png",
		prjectName: "Light Dark webapp",
		projectDescription: `A responsive web app featuring a smooth Dark/Light mode toggle that remembers user preferences to deliver a personalized experience.`,
		githubRepoLink: "https://github.com/ShankarDutta/light-dark-webapp",
		liveLink: "https://medlixhealth.netlify.app/",
		techStacks: ["Html", "Css", "Java Script", "Bootstrap"],
	},

	{
		id: 5,
		img: "/projects/projects5.png",
		prjectName: "Login Signup Form ",
		projectDescription: `A clean and modern login and signup form design featuring a smooth, intuitive UI, responsive layout, and seamless user experience.`,
		githubRepoLink: "https://github.com/ShankarDutta/login-signup-form",
		liveLink: "https://signup-login-vanilajs.netlify.app/",
		techStacks: ["Html", "Css", "Java Script", "Bootstrap"],
	},

	{
		id: 6,
		img: "/projects/projects6.png",
		prjectName: "Virtual Keyboard",
		projectDescription: `A responsive and interactive virtual keyboard that allows users to type using on-screen keys with smooth animations and clean design.`,
		githubRepoLink: `https://github.com/ShankarDutta/virtual-keyboard-webapp`,
		liveLink: "https://virtual-keyboard-webapp.netlify.app/",
		techStacks: ["Html", "Css", "Java Script", "Bootstrap"],
	},
];
