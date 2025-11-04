import Hero from "@/components/Herosection/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Nextjs Starter Template",
	description: "Home page of Nextjs Starter Template",
	icons: "logo.svg",
};

const page = () => {
	return (
		<>
			<section className="grid h-[70dvh] place-items-center">
				<Hero />
			</section>
		</>
	);
};

export default page;
