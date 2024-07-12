import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import Radiogroup from "../components/radiogroup";

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
				maxWidth: "464px",
				maxHeight: "1057px",
			}}
		>
			<Image src={wooviLogo} alt="Woovi Logo" width={123.51} height={36.65} />
			<div
				style={{
					width: "325px",
					height: "33px",
					display: "flex",
					alignItems: "center",
					margin: "1.25rem",
				}}
			>
				<h1
					style={{
						fontSize: "24px",
						fontWeight: "800",
						lineHeight: "32.74px",
						textAlign: "left",
						color: "#4B5563",
					}}
				>
					João, como você quer pagar?
				</h1>
			</div>

			<section style={{ fontFamily: "sans-serif" }}>
				<Radiogroup />
			</section>

			<div>Pix Parcelado</div>
		</main>
	);
}
