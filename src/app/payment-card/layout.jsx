import { Nunito } from "next/font/google";
import WooviLogo from "../components/WooviLogo";
import Footer from "../components/Footertemp";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
	title: "Woovi frontend challenge",
	description: "Frontend challenge for Woovi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${nunito.variable} font-sans`}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div style={{ marginTop: "3px", marginBottom: "3px" }}>
					<WooviLogo />
				</div>
				{children}
				<div>
					<Footer style={{ marginTop: "27px", marginBottom: "307px" }} />
				</div>
			</body>
		</html>
	);
}
