import { NavigationBtnUiType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavigationBtn = ({
	children,
	url,
	className,
	aria,
}: NavigationBtnUiType) => {
	return (
		<>
			<Link
				href={url}
				aria-label={aria}>
				<button
					className={cn(
						"h-[38px] cursor-pointer gap-1 rounded-full border border-black bg-transparent px-6 text-[16px] font-[400] text-black transition-colors duration-300 ease-in-out hover:bg-transparent dark:border-white dark:text-white",
						className,
					)}
					aria-label={aria}>
					{children}
				</button>
			</Link>
		</>
	);
};

export default NavigationBtn;
