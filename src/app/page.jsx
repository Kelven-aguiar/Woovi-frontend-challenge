"use client";
import React, { useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { PaymentContext } from "./contexts/paymentContext";
import NextPageButton from "./components/NextPageButton";
import WooviLogo from "./components/WooviLogo";
import ReportIcon from "@mui/icons-material/Report";

const Page = () => {
	const { name, setName } = useContext(PaymentContext);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	return (
		<Box
			sx={{
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "20px",
				width: "100%",
				maxWidth: "464px",
				boxSizing: "border-box",
			}}
		>
			<WooviLogo color={"#E5E5E5"} width={200} height={50} />
			<Typography
				color={"#E5E5E5"}
				sx={{
					fontSize: "2rem",
					fontWeight: 800,
					lineHeight: "1.2",
					margin: "10px 0",
					textAlign: "center",
				}}
			>
				Desafio FrontEnd
			</Typography>
			<Typography
				color={"#E5E5E5"}
				sx={{
					fontSize: "1.5rem",
					fontWeight: 600,
					lineHeight: "1.4",
					textAlign: "center",
				}}
			>
				Escreva seu primeiro nome para continuar:
			</Typography>

			<TextField
				label="Nome"
				variant="outlined"
				name="Nome"
				value={name}
				onChange={handleNameChange}
				sx={{
					width: "50%",
					margin: "10px",
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "#E5E5E5",
							borderWidth: "2px",
						},
						"&:hover fieldset": {
							borderColor: "#E5E5E5",
						},
						"&.Mui-focused fieldset": {
							borderColor: "#E5E5E5",
						},
					},
					"& .MuiInputBase-input": {
						borderRadius: "8px",
						color: "white",
					},
					"& .MuiInputLabel-root": {
						color: "#E5E5E5",
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: "#E5E5E5",
					},
				}}
			/>
			<NextPageButton content="Prosseguir" type="link" path={"howtopay"} />
			<span style={{ position: "relative", display: "inline-block" }}>
				<ReportIcon
					sx={{
						color: "#E5E5E5",
						position: "absolute",
						left: 0,
						top: -2,
						zIndex: -1,
					}}
				/>
				<span style={{ color: "#E5E5E5", paddingLeft: "24px" }}>
					Site apenas para fins de apresentação de portfólio. Nenhum dado será
					armazenado, de qualquer forma, não insira informações reais.
				</span>
			</span>
		</Box>
	);
};

export default Page;
