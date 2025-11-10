import NavBar from "@/components/Header/NavBar";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import { RootLayoutProps } from "@/lib/types";
import "./globals.css";

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute={"class"}
					defaultTheme="light"
					enableSystem={false}>
					{/* <Header /> */}
					<NavBar />

					<main className="mx-auto max-w-7xl px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
