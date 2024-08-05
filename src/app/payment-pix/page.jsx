"use client";
import Image from "next/image";
import { useContext } from "react";
import qrcode from "../../assets/qrcode.svg";
import Progress from "../components/progress";
import NextPageButton from "../components/NextPageButton";
import { PaymentContext } from "../contexts/paymentContext";

export default function Payment() {
	const name = useContext(PaymentContext).name;
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<div
				style={{
					width: "421px",
					height: "66px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<span
					style={{
						fontSize: "24px",
						fontWeight: "bold",
						lineHeight: "32.74px",
						color: "#4B5563",
						textAlign: "center",
					}}
				>
					{name}, pague a entrada de
				</span>
				<span
					style={{
						fontSize: "24px",
						fontWeight: "bold",
						lineHeight: "32.74px",
						color: "#4B5563",
					}}
				>
					pelo Pix
				</span>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					border: "2px solid #03D69D",
					borderRadius: "10px",
					marginBottom: "1rem",
					width: "350px",
					height: "350px",
				}}
			>
				<Image src={qrcode} alt="qrcode" />
			</div>

			<NextPageButton
				icon="copy"
				content="Clique para copiar QR CODE "
				type="trigger"
			/>
			<Progress />
		</main>
	);
}
