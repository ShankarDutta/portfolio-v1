import { WorkingBtnUiType } from "@/lib/types";
import { cn } from "@/lib/utils";

const WorkingBtn = ({
	aria,
	children,
	url,
	className,
	download,
}: WorkingBtnUiType) => {
	return (
		<>
			<a
				href={url}
				aria-label={aria}
				download={download}>
				<button
					className={cn(
						"h-[38px] cursor-pointer gap-1 rounded-full border border-black bg-transparent px-6 text-[16px] font-[400] text-black transition-colors duration-300 ease-in-out hover:bg-transparent dark:border-white dark:text-white",
						className,
					)}
					aria-label={aria}>
					{children}
				</button>
			</a>
		</>
	);
};

export default WorkingBtn;
