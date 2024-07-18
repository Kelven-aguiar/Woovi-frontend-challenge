import WooviLogo from "../components/wooviLogo";
import RadioGroupPayment from "../components/radiogroup";
import Footer from "../components/footer";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				margin: "0px",
				backgroundColor: "white",
				width: "464px",
			}}
		>
			<WooviLogo />
			<h1
				style={{
					width: "325px",
					height: "33px",
					display: "flex",
					alignItems: "center",
					margin: "1.25rem",
					fontSize: "24px",
					fontWeight: "800",
					lineHeight: "32.74px",
					textAlign: "left",
					color: "#4D4D4D",
				}}
			>
				João, como você quer pagar?
			</h1>
			<section>
				<RadioGroupPayment />
			</section>
			<Button
				variant="contained"
				sx={{
					borderRadius: "8px",
					backgroundColor: "#133A6F",
					"&:hover": {
						backgroundColor: "#0C2750",
					},
				}}
			>
				<span
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					PROSSEGUIR <ArrowRightIcon />
				</span>
			</Button>
			<Footer />
		</main>
	);
}
