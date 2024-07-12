import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import qrcode from "../../assets/qrcode.svg";
import Button from "@mui/material/Button";
import copy from "../../assets/copy.svg";
import checkline from "../../assets/checkline.svg";

export default function Home() {
	const pixPrice = 15300.0; // Variável que irá armazenar o valor de acordo com o BACKEND ou calculado

	// Função para formatar para BRL
	const formatPixPrice = (pixPrice) => {
		return pixPrice.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
			minimumFractionDigits: 2,
		});
	};

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "2.5rem",
				maxWidth: "464px",
				maxHeight: "1057px",
			}}
		>
			<Image src={wooviLogo} />
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
					}}
				>
					João, pague a entrada de
				</span>
				<span
					style={{
						fontSize: "24px",
						fontWeight: "bold",
						lineHeight: "32.74px",
						color: "#4B5563",
					}}
				>
					{formatPixPrice(pixPrice)} pelo Pix
				</span>
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					border: "2px solid #22C55E",
					borderRadius: "0.5rem",
					marginBottom: "1rem",
					width: "350px",
					height: "350px",
				}}
			>
				<Image src={qrcode} />
			</div>

			<Button
				variant="contained"
				sx={{
					width: "310px",
					height: "39px",
					borderRadius: "8px",
					backgroundColor: "#133A6F",
					"&:hover": {
						backgroundColor: "#0C2750",
					},
				}}
			>
				<span style={{ marginRight: "10px" }}>Clique para copiar QR CODE </span>{" "}
				{<Image src={copy} />}
			</Button>

			<div style={{ marginTop: "1rem" }}>
				<span
					style={{
						fontSize: "0.875rem",
						fontWeight: "600",
						color: "#9CA3AF",
					}}
				>
					Prazo de pagamento:
				</span>
				<span
					style={{
						display: "flex",
						alignItems: "center",
						fontSize: "1rem",
						fontWeight: "bold",
						lineHeight: "21.82px",
						color: "#4B5563",
					}}
				>
					15/12/2021 - 08:17
				</span>
			</div>

			<div
				style={{ display: "flex", alignItems: "center", position: "relative" }}
			>
				<div style={{ marginRight: "10px" }}>
					<Image src={checkline} width={20} height={20} alt="Checkline" />
				</div>

				<div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span>1º entrada no Pix</span>
						<span style={{ marginLeft: "8px" }}>R$ 15.300,00</span>
					</div>
					<div style={{ display: "flex", alignItems: "center" }}>
						<span>2º entrada no cartão</span>
						<span style={{ marginLeft: "8px" }}>R$ 15.300,00</span>
					</div>
				</div>
			</div>
		</main>
	);
}
