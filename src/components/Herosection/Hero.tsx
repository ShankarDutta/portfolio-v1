import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

import WorkingBtn from "../customui/WorkingBtn";
import { TypingAnimation } from "../shadcnui/typing-animation";

const Hero = () => {
	return (
		<section className="space-y-4 text-center">
			<div className="relative">
				<Image
					src={"/profile-picture.jpeg"}
					alt="Profile-Picture"
					height={100}
					width={100}
					loading="eager"
					className="mx-auto h-[72px] w-[72px] rounded-full object-cover"
				/>
			</div>
			<h1 className="font-primary text-xl md:text-3xl">
				Hello! I&apos;m Shankar Dutta
			</h1>
			<div className="">
				<TypingAnimation
					words={["Frontend  Developer", "Ui/Ux Designer"]}
					loop
					className="font-primary text-4xl font-semibold md:text-6xl"
				/>
			</div>

			<p className="font-secondary mx-auto w-auto text-lg text-black/70 lg:w-5xl dark:text-white/70">
				I&apos;m a passionate Frontend Developer with a keen eye for
				design & a love for crafting seamless user exprience. I focus on
				clean code, performance, and accessibility to deliver seamless
				digital solutions.
			</p>

			<div className="flex flex-wrap justify-center gap-3">
				<WorkingBtn
					url="mailto:mr.shankardutta@gmail.com"
					className="font-secondary flex items-center justify-center gap-2 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:dark:border-blue-500"
					aria="Mail-Button">
					Hire Me
					<FaArrowRightLong size={18} />
				</WorkingBtn>

				<WorkingBtn
					url={"/shankarduttacv.pdf"}
					download={true}
					className="font-secondary flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-500 hover:dark:border-blue-400 hover:dark:text-blue-400"
					aria="Resume-Download-Button">
					My resume
					<FiDownload />
				</WorkingBtn>
			</div>
		</section>
	);
};

export default Hero;
