import { toolsIcons } from "@/lib/mapDatas";
import Image from "next/image";

const ToolsCard = () => {
	return (
		<section className="flex gap-2">
			{toolsIcons.map((icons, index) => (
				<div
					className="rounded-lg border-2 p-4"
					key={index}>
					<Image
						src={icons}
						alt="icons"
						height={250}
						width={250}
						className="h-[40] w-[40]"
					/>
				</div>
			))}
		</section>
	);
};

export default ToolsCard;
