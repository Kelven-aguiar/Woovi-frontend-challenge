"use client";
import React, { useContext } from "react";
import RadioGroupPayment from "../components/radiogroup";
import NextPageButton from "../components/NextPageButton";
import { PaymentContext } from "../contexts/paymentContext";

export default function Home() {
	const name = useContext(PaymentContext).name;

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
					textAlign: "center",
					color: "#4D4D4D",
				}}
			>
				{`${name}, como você quer pagar?`}
			</h1>
			<section>
				<RadioGroupPayment />
			</section>
			<NextPageButton content="Prosseguir" path="payment-pix" type="link" />
		</main>
	);
}
