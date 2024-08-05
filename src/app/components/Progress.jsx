"use client";
import Checkedline from "../components/checkline";
import { useContext } from "react";
import { PaymentContext } from "../contexts/paymentContext";
import Accordion from "../components/CustomAccordion";

const getUpdatedDateTime = () => {
	const hours = new Date();
	hours.setMinutes(hours.getMinutes() + 30);

	const dateString = hours.toLocaleDateString("pt-BR");
	const timeString = hours.toLocaleTimeString("pt-BR", {
		hour: "2-digit",
		minute: "2-digit",
	});
	return `${dateString} - ${timeString}`;
};

export default function Progress() {
	const { paymentData } = useContext(PaymentContext);
	const { installments, total, identifier } = paymentData;
	const rest = total - installments;
	const updatedDateTime = getUpdatedDateTime();

	return (
		<div>
			<div
				style={{
					marginTop: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "600",
						color: "#B2B2B2",
					}}
				>
					Prazo de pagamento:
				</span>
				<span
					style={{
						fontSize: "16px",
						fontWeight: "800",
						lineHeight: "21.82px",
						color: "#4D4D4D",
					}}
				>
					{updatedDateTime}
				</span>
			</div>
			<div style={{ display: "flex", alignItems: "center", height: "70px" }}>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Checkedline />
				</div>
				<div style={{ marginRight: "20px" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "400px", //Não esta responsivo
							marginBottom: "12px", //Não esta responsivo
						}}
					>
						<span>1ª entrada no Pix</span>
						<span style={{ marginLeft: "auto" }}>
							{" "}
							{installments.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "400px", //Não esta responsivo
						}}
					>
						<span>2º no cartão</span>
						<span style={{ marginLeft: "8px" }}>
							{rest.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
							})}
						</span>
					</div>
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					height: "2px",
					backgroundColor: "#E5E5E5",
					border: "none",
				}}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "100%",
					color: "#4D4D4D",
				}}
			>
				<span
					style={{
						fontWeight: "600",
						fontSize: "14px",
						lineHeight: "19.1px",
					}}
				>
					CET: 0,5%
				</span>
				<div
					style={{
						fontWeight: "600",
						fontSize: "18px",
						lineHeight: "24.55px",
					}}
				>
					<span>Total: </span>
					<span>
						{total.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</span>
				</div>
			</div>
			<hr
				style={{
					width: "100%",
					height: "2px",
					backgroundColor: "#E5E5E5",
					border: "none",
				}}
			/>
			<Accordion />
			<hr
				style={{
					width: "100%",
					height: "2px",
					backgroundColor: "#E5E5E5",
					border: "none",
				}}
			/>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<span
					style={{
						fontWeight: "600",
						fontSize: "14px",
						lineHeight: "19.1px",
						color: "#B2B2B2",
					}}
				>
					{" "}
					Identificador
				</span>
				<span
					style={{ fontWeight: "800", fontSize: "14px", lineHeight: "19.1px" }}
				>
					<span>{identifier}</span>
				</span>
			</div>
		</div>
	);
}
