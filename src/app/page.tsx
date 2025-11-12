import About from "@/components/Aboutsection/About";
import Hero from "@/components/Herosection/Hero";
import { LightRays } from "@/components/magicui/light-rays";
import ProjectSec from "@/components/MyProjects/ProjectSec";
import TechsCard from "@/components/Techstacksection/TechsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
	icons: "logo.svg",
};

const page = () => {
	return (
		<>
			<section
				className="grid h-[70dvh] place-items-center md:h-[75dvh]"
				id="#">
				<Hero />
				<LightRays />
			</section>

			<section
				className="pt-18 md:pt-22"
				id="about-me">
				<About />
			</section>
			<section
				aria-label="My-TechStack"
				className="pt-20 text-center">
				<h1 className="font-primary text-4xl font-bold">
					My Tech Stack
				</h1>
				<p className="font-secondary pt-2 text-lg text-black/70 dark:text-white/70">
					Technologies I’ve been working with recently
				</p>
				<TechsCard />
			</section>

			<section
				className="pt-20"
				id="my-projects">
				<ProjectSec />
			</section>
		</>
	);
};

export default page;
