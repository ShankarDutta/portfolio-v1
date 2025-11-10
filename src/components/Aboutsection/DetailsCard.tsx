import { detailsCardData } from "@/lib/mapDatas";
import { Card, CardContent, CardHeader, CardTitle } from "../shadcnui/card";

const DetailsCard = () => {
	return (
		<section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
			{detailsCardData.map((datas) => (
				<Card
					key={datas.id}
					className="w-auto">
					<CardHeader>
						<CardTitle className="w-[50] rounded-lg bg-[#FF388B] p-3 text-white">
							<datas.icons />
						</CardTitle>
						<div className="font-primary">{datas.heading}</div>
					</CardHeader>
					<CardContent>
						<p className="font-secondary text-black/75 dark:text-white/75">
							{datas.paragraph}
						</p>
					</CardContent>
				</Card>
			))}
		</section>
	);
};

export default DetailsCard;
