import WooviLogo from "../components/wooviLogo";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

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
			<WooviLogo />
			<div
				style={{
					width: "422px",
					height: "66px",
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
					João, pague o restante em 1x no{" "}
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						cartão
					</span>
				</h1>
			</div>
			<Box
				sx={{
					py: 2,
					display: "grid",
					gap: 2,
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Input
					style={{
						border: "2px solid #E5E7EB",
					}}
					placeholder="Digite seu nome completo…"
				/>
				<Input placeholder="Digite seu CPF" />
				<Input placeholder="Digite seu Número do cartão" />
				<Input placeholder="Type in here…" />
			</Box>
		</main>
	);
}
