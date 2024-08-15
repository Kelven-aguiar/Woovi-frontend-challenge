"use client";
import Checkedline from "../components/checkline";
import { useContext } from "react";
import { PaymentContext } from "../contexts/paymentContext";
import Accordion from "../components/CustomAccordion";
import Checkpoint from "./Checkpoint";

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
	const { installments, total, identifier, rest, value } = paymentData;
	const updatedDateTime = getUpdatedDateTime();

	return (
		<section style={{ marginTop: "1rem", textAlign: "center" }}>
			<article>
				<div
					style={{
						fontSize: "16px",
						fontWeight: "600",
						color: "#B2B2B2",
					}}
				>
					Prazo de pagamento:
				</div>
				<div
					style={{
						fontSize: "16px",
						fontWeight: "800",
						lineHeight: "21.82px",
						color: "#4D4D4D",
					}}
				>
					{updatedDateTime}
				</div>
			</article>
			{value === "1x" ? (
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<div style={{ display: "flex", alignItems: "center" }}>
						<Checkpoint />
						<dt style={{ marginLeft: "8px" }}>1ª entrada no Pix</dt>{" "}
					</div>
					<dd>
						{installments.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}
					</dd>
				</div>
			) : (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Checkedline />
					<div>
						<dl
							style={{
								display: "flex",
								justifyContent: "center",
								marginBottom: "12px",
							}}
						>
							<dt>1ª entrada no Pix</dt>
							<dd style={{ marginLeft: "auto" }}>
								{installments.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}
							</dd>
						</dl>
						<dl
							style={{
								display: "flex",
								justifyContent: "space-between",
								width: "400px",
							}}
						>
							<dt>2º no cartão</dt>
							<dd style={{ marginLeft: "8px" }}>
								{rest.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}
							</dd>
						</dl>
					</div>
				</div>
			)}

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
				<p
					style={{
						display: "flex",
						fontWeight: "600",
						fontSize: "14px",
						lineHeight: "19.1px",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					CET: 0,5%
				</p>
				<div
					style={{
						fontWeight: "600",
						fontSize: "18px",
						lineHeight: "24.55px",
					}}
				>
					<p>
						Total:{" "}
						{value === "1x"
							? installments.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})
							: total.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}
					</p>
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
			<article
				style={{
					textAlign: "center",
				}}
			>
				<div
					style={{
						fontWeight: "600",
						fontSize: "14px",
						lineHeight: "19.1px",
						color: "#B2B2B2",
					}}
				>
					Identificador
				</div>
				<div
					style={{
						fontWeight: "800",
						fontSize: "14px",
						lineHeight: "19.1px",
					}}
				>
					{identifier}
				</div>
			</article>
		</section>
	);
}
