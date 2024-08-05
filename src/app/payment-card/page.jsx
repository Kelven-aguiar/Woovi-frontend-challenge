"use client";
import React, { useState, useContext } from "react";
import { PaymentContext } from "../contexts/paymentContext";
import Progress from "../components/progress";

import {
	Box,
	TextField,
	Button,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
} from "@mui/material";

export default function PaymentForm() {
	const [formData, setFormData] = useState({
		nomeCompleto: "",
		cpf: "",
		numeroCartao: "",
		vencimento: "",
		cvv: "",
		parcelas: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const { name } = useContext(PaymentContext);
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
				{`${name}, pague o restante em 1x no cartão`}
			</h1>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					maxWidth: 424,
					margin: "auto",
				}}
			>
				<TextField
					label="Nome Completo"
					variant="outlined"
					name="nomeCompleto"
					value={formData.nomeCompleto}
					onChange={handleChange}
					fullWidth
					sx={{
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#E5E5E5",
								borderWidth: "2px",
							},
							"&:hover fieldset": {
								borderColor: "#03D69D",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#03D69D",
							},
						},
						"& .MuiInputBase-input": {
							borderRadius: "8px",
						},
						"& .MuiInputLabel-root": {
							color: "#4D4D4D",
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#4D4D4D",
						},
					}}
				/>
				<TextField
					label="CPF"
					variant="outlined"
					name="cpf"
					value={formData.cpf}
					onChange={handleChange}
					fullWidth
					sx={{
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#E5E5E5",
								borderWidth: "2px",
							},
							"&:hover fieldset": {
								borderColor: "#03D69D",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#03D69D",
							},
						},
						"& .MuiInputBase-input": {
							borderRadius: "8px",
						},
						"& .MuiInputLabel-root": {
							color: "#4D4D4D",
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#4D4D4D",
						},
					}}
				/>
				<TextField
					label="Número do Cartão"
					variant="outlined"
					name="numeroCartao"
					value={formData.numeroCartao}
					onChange={handleChange}
					fullWidth
					sx={{
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#E5E5E5",
								borderWidth: "2px",
							},
							"&:hover fieldset": {
								borderColor: "#03D69D",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#03D69D",
							},
						},
						"& .MuiInputBase-input": {
							borderRadius: "8px",
						},
						"& .MuiInputLabel-root": {
							color: "#4D4D4D",
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#4D4D4D",
						},
					}}
				/>
				<Box
					sx={{
						display: "flex",
						gap: 2,
					}}
				>
					<TextField
						label="Vencimento (MM/AA)"
						variant="outlined"
						name="vencimento"
						value={formData.vencimento}
						onChange={handleChange}
						flex={1}
						placeholder="MM/AA"
						inputProps={{ maxLength: 5 }}
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#E5E5E5",
									borderWidth: "2px",
								},
								"&:hover fieldset": {
									borderColor: "#03D69D",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#03D69D",
								},
							},
							"& .MuiInputBase-input": {
								borderRadius: "8px",
							},
							"& .MuiInputLabel-root": {
								color: "#4D4D4D",
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4D4D4D",
							},
						}}
					/>
					<TextField
						label="CVV"
						variant="outlined"
						name="cvv"
						value={formData.cvv}
						onChange={handleChange}
						flex={1}
						inputProps={{ maxLength: 3 }}
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: "#E5E5E5",
									borderWidth: "2px",
								},
								"&:hover fieldset": {
									borderColor: "#03D69D",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#03D69D",
								},
							},
							"& .MuiInputBase-input": {
								borderRadius: "8px",
							},
							"& .MuiInputLabel-root": {
								color: "#4D4D4D",
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: "#4D4D4D",
							},
						}}
					/>
				</Box>
				<FormControl
					fullWidth
					variant="outlined"
					sx={{
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#E5E5E5",
								borderWidth: "2px",
							},
							"&:hover fieldset": {
								borderColor: "#03D69D",
							},
							"&.Mui-focused fieldset": {
								borderColor: "#03D69D",
							},
							"& .MuiSelect-select": {
								borderRadius: "8px",
							},
						},
						"& .MuiInputLabel-root": {
							color: "#4D4D4D",
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: "#4D4D4D",
						},
					}}
				>
					<InputLabel>Parcelas</InputLabel>
					<Select
						value={formData.parcelas}
						onChange={handleChange}
						name="parcelas"
						label="Parcelas"
					>
						<MenuItem value={1}>1x</MenuItem>
						<MenuItem value={2}>2x</MenuItem>
						<MenuItem value={3}>3x</MenuItem>
						<MenuItem value={4}>4x</MenuItem>
						<MenuItem value={5}>5x</MenuItem>
						<MenuItem value={6}>6x</MenuItem>
					</Select>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{
						backgroundColor: "#133A6F",
						"&:hover": {
							backgroundColor: "#102A4A",
						},
					}}
				>
					Enviar
				</Button>
			</Box>
			<Progress />
		</main>
	);
}
