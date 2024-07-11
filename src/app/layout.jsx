import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
	title: "Woovi frontend challenge",
	description: "Frontend challenge for Woovi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} font-sans`}>{children}</body>
		</html>
	);
}
