import { projectsDetails } from "@/lib/mapDatas";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "../shadcnui/card";

const ProjectCard = () => {
	return (
		<>
			{projectsDetails.map((project) => (
				<Card key={project.id}>
					<a
						href={project.liveLink}
						target="_blank"
						aria-label={project.prjectName}>
						<Image
							src={project.img}
							alt="projects-images"
							height={600}
							width={600}
							className="h-auto w-auto rounded-t-2xl border-b-2 object-cover"
						/>
					</a>
					<CardContent className="space-y-4 pb-6 text-start">
						<CardTitle className="font-primary flex justify-between text-[18px] font-semibold">
							{project.prjectName}
							<div className="flex items-center gap-3">
								<a
									href={project.liveLink}
									target="_blank"
									className="hover:text-blue-400"
									aria-label={project.prjectName}>
									<SquareArrowOutUpRightIcon size={22} />
								</a>

								<a
									href={project.githubRepoLink}
									target="_blank"
									aria-label={project.prjectName}
									className="hover:text-blue-400">
									<FaGithub size={24} />
								</a>
							</div>
						</CardTitle>

						{
							<div className="flex flex-wrap gap-2">
								{project.techStacks.map((tech, index) => (
									<div
										key={index}
										draggable="true"
										className="rounded-full border bg-transparent px-2.5 py-0.5 text-[14px]">
										{tech}
									</div>
								))}
							</div>
						}

						<CardDescription className="text-black/80 dark:text-white/85">
							{project.projectDescription}
						</CardDescription>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default ProjectCard;
