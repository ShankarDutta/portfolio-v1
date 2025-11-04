import { CustomBtnUiType } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CustomBtn = ({ children, url, className, aria }: CustomBtnUiType) => {
	return (
		<Link
			href={url}
			aria-label={aria}>
			<button
				className={cn(
					"h-[38px] cursor-pointer gap-1 rounded-full border border-black bg-transparent px-6 text-[16px] font-[400] text-black hover:bg-transparent dark:border-white dark:text-white",
					className,
				)}
				aria-label={aria}>
				{children}
			</button>
		</Link>
	);
};

export default CustomBtn;
