import Image from "next/image";
import DetailsCard from "./DetailsCard";
import ToolsCard from "./ToolsCard";

const About = () => {
	return (
		<section>
			{/* heading  */}
			<section
				aria-labelledby="About-heading"
				className="text-center">
				<div className="font-secondary text-xl md:text-2xl">
					Introduction
				</div>
				<h1 className="font-primary text-4xl font-[560] md:text-6xl">
					About me
				</h1>
			</section>

			<section
				aria-label="About-developer"
				className="grid grid-cols-1 gap-8 pt-6 lg:grid-cols-3">
				{/* section 1  */}
				<figure className="mx-auto">
					{/* main image  */}
					<Image
						src={"/mainProfile.png"}
						alt="Developer-Picture"
						height={600}
						width={600}
						priority
						loading="eager"
						className="h-auto w-full rounded-2xl"
					/>
				</figure>

				{/* section 2  */}
				<section className="space-y-4 lg:col-span-2">
					{/* about my self  */}
					<p className="font-primary text-center text-black/75 lg:text-start dark:text-white/75">
						I am an experienced Frontend Developer with over a
						decade of professional expertise. Throughout my career,
						I have had the privilege of collaborating with renowned
						organizations, contributing significantly to their
						growth and success.
					</p>
					{/* cards  */}
					<DetailsCard />

					{/* tools card  */}
					<section
						className="space-y-2"
						aria-label="tools section">
						<h2 className="font-primary text-lg">Tools I Used</h2>
						<ToolsCard />
					</section>
				</section>
			</section>
		</section>
	);
};

export default About;
