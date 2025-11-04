"use client";
import { navItems } from "@/lib/mapDatas";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../shadcnui/sheet";
import Logo from "./Logo";

const MobileNav = () => {
	const [isOpen, setOpen] = useState(false);

	const handleNavClick = (matchid: string) => {
		setOpen(false);
		const el = document.getElementById(matchid);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div>
			<Sheet
				open={isOpen}
				onOpenChange={setOpen}>
				<SheetTrigger
					className="mt-1.5"
					aria-label="Menu-Button">
					<RiMenu3Line size={34} />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="border-b">
						<SheetTitle>
							<Logo />
						</SheetTitle>
						<SheetDescription />
					</SheetHeader>
					<div className="flex flex-col items-center justify-center gap-4">
						{navItems.map((nav) => {
							return (
								<button
									key={nav.id}
									onClick={() => handleNavClick(nav.matchid)}
									className="hover:text-blue-500 hover:dark:text-blue-300"
									aria-label={nav.matchid}>
									{nav.label}
								</button>
							);
						})}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNav;
