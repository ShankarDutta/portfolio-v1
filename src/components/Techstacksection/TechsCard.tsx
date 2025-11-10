import { techStacksIcons } from "@/lib/mapDatas";
import Image from "next/image";

const TechsCard = () => {
	return (
		<section className="grid grid-cols-4 place-items-center gap-6 pt-8 md:grid-cols-6">
			{techStacksIcons.map((icons, index) => (
				<Image
					key={index}
					src={icons}
					alt="tech-icons"
					height={400}
					width={400}
					className="h-[40] w-auto md:h-[50]"
				/>
			))}
		</section>
	);
};

export default TechsCard;
