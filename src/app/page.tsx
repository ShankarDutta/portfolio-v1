import { AuroraText } from "@/components/magicui/aurora-text";
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
				className="grid h-[70dvh] place-items-center"
				id="/">
				<AuroraText className="text-5xl font-bold">Hero</AuroraText>
			</section>
		</>
	);
};

export default page;
