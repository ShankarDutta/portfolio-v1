import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			className="flex items-center"
			aria-label="Nav-Logo">
			<Image
				src="/logo.svg"
				alt="logo"
				height={40}
				width={40}
				priority
				className="h-[40] w-[40]"
			/>

			<h1
				className="text-[22px] font-semibold md:text-[28px]"
				aria-label="WebApp-Name">
				Portfolio
				<span className="text-pink-500">.</span>
			</h1>
		</Link>
	);
};

export default Logo;
