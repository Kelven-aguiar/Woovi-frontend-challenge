import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import RadioGroupPayment from "../components/radiogroup";
export default function Home() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				margin: "1.5rem",
				backgroundColor: "white",
			}}
		>
			<Image src={wooviLogo} alt="Woovi Logo" />
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
			<div>Pix Parcelado</div>
		</main>
	);
}
