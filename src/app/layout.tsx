import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			data-scroll-behavior="smooth"
			className="scroll-smooth">
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="light"
					enableSystem={false}>
					{/* <Header /> */}
					<NavBar />

					<main className="container mx-auto px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
