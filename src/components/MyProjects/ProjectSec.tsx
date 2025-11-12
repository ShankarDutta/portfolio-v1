import ProjectCard from "./ProjectCard";

const ProjectSec = () => {
	return (
		<>
			<section
				aria-label="My-Latest-Works"
				className="space-y-4 text-center">
				<h1
					aria-label="work-section-heading "
					className="font-primary text-4xl font-bold">
					My latest Projects
				</h1>
				<p
					aria-label="work-section-paragraph"
					className="font-secondary mx-auto w-auto text-lg text-black/75 md:w-lg lg:w-xl dark:text-white/70">
					Welcome to my web development portfolio! Explore a
					collection of projects showcasing my expertise in front-end
					development.
				</p>

				<section
					className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3"
					aria-label="projects-cards">
					<ProjectCard />
				</section>
			</section>
		</>
	);
};

export default ProjectSec;
