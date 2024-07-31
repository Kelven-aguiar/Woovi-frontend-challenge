import { Nunito } from "next/font/google";
import "./globals.css";
import { PaymentProvider } from "./contexts/paymentContext";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata = {
	title: "Woovi frontend challenge",
	description: "Frontend challenge for Woovi",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				style={{ backgroundColor: "#03D69D" }}
				className={`${nunito.variable} font-sans`}
			>
				<PaymentProvider>{children}</PaymentProvider>
			</body>
		</html>
	);
}
