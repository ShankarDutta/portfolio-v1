import { navItems } from "@/lib/mapDatas";
import Link from "next/link";

const DesktopNav = () => {
	return (
		<>
			{navItems.map((nav) => {
				return (
					<Link
						key={nav.id}
						href={nav.urlid}
						aria-label={nav.matchid}
						className="hover:text-blue-500 hover:dark:text-blue-300">
						{nav.label}
					</Link>
				);
			})}
		</>
	);
};

export default DesktopNav;
