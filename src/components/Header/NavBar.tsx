"use client";

import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomBtn from "../customui/CustomBtn";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const NavBar = () => {
	const [isScroll, setScroll] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setScroll(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!mounted) return null;

	return (
		<>
			{/* background gradient — theme safe */}
			{theme === "light" && (
				<Image
					src="/bg-gradient.svg"
					alt="gradient light"
					height={1000}
					width={1000}
					loading="eager"
					priority
					aria-label="Bg-Gradinet"
					className="fixed top-0 right-0 z-[-40] h-full w-11/12 translate-y-[-40%]"
				/>
			)}

			<header
				className={`sticky top-0 z-50 py-4 transition-colors duration-300 ${
					isScroll
						? "bg-white/50 backdrop-blur-lg dark:bg-black/20"
						: ""
				}`}
				aria-label="Webapp-Header">
				<nav
					className="mx-auto flex max-w-7xl items-center justify-between px-6"
					aria-label="Nav-bar">
					{/* logo */}
					<Logo />

					{/* Desktop navitems */}
					<div
						className={`hidden gap-4 rounded-full px-12 py-3 md:flex lg:gap-8 dark:border dark:bg-transparent ${
							isScroll
								? "bg-transparent dark:border-none"
								: "bg-white shadow dark:border-white"
						}`}
						aria-label="Desktop-Nav-Items">
						<DesktopNav />
					</div>

					{/* Toggle + Contact */}
					<div
						className="flex gap-2 md:gap-4"
						aria-label="toggle & contact">
						<ThemeToggleButton />

						<CustomBtn
							url={{ hash: "#contact" }}
							className="hidden items-center justify-center hover:border-blue-500 hover:text-blue-500 md:flex hover:dark:border-blue-400 hover:dark:text-blue-400"
							aria="Contact-Button">
							Contact
							<ArrowUpRight size={18} />
						</CustomBtn>

						{/* Mobile Nav */}
						<div
							className="block md:hidden"
							aria-label="Mobile-Nav">
							<MobileNav />
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default NavBar;
