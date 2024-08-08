"use client";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PaymentContext } from "../contexts/paymentContext";
import Progress from "../components/progress";
import InputMask from "react-input-mask";
import FinishModal from "../components/FinishModal";

import {
	Box,
	TextField,
	Button,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	FormHelperText,
} from "@mui/material";

const commonTextFieldStyles = {
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
};

export default function PaymentForm() {
	const [open, setOpen] = useState(false);
	const { name } = useContext(PaymentContext);
	const { paymentData } = useContext(PaymentContext);
	const rest = paymentData.rest;

	function generateInstallments() {
		const installments = [];
		for (let i = 0; i < 6; i++) {
			installments.push(Number(rest / (i + 1)));
		}
		return installments;
	}
	const installmentOptions = generateInstallments(rest);

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm();

	function createPayment(data) {
		console.log(data);
		setOpen(true);
	}

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "white",
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
				{`${name}, pague o restante em até 6x no cartão`}
			</h1>
			<Box
				component="form"
				onSubmit={handleSubmit(createPayment)}
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
					{...register("nomeCompleto", { required: "Nome é obrigatório." })}
					fullWidth
					error={!!errors.nomeCompleto}
					helperText={errors.nomeCompleto?.message}
					sx={commonTextFieldStyles}
				/>
				<InputMask
					mask="999.999.999-99"
					maskChar=""
					maskPlaceholder=""
					{...register("cpf", {
						required: "CPF é obrigatório",
						minLength: {
							value: 11,
							message: "CPF deve conter 11 dígitos.",
						},
					})}
				>
					{(inputProps) => (
						<TextField
							label="CPF"
							variant="outlined"
							{...inputProps}
							fullWidth
							error={!!errors.cpf}
							helperText={errors.cpf?.message}
							sx={commonTextFieldStyles}
						/>
					)}
				</InputMask>
				<InputMask
					mask="9999 9999 9999 9999"
					maskChar=""
					maskPlaceholder=""
					{...register("numeroCartao", {
						required: "Número do cartão é obrigatório.",
					})}
				>
					{(inputProps) => (
						<TextField
							label="Número do Cartão"
							variant="outlined"
							{...inputProps}
							fullWidth
							error={!!errors.numeroCartao}
							helperText={errors.numeroCartao?.message}
							sx={commonTextFieldStyles}
						/>
					)}
				</InputMask>
				<Box
					sx={{
						display: "flex",
						gap: 2,
					}}
				>
					<InputMask
						mask="99/99"
						maskChar=""
						{...register("vencimento", {
							required: "Data de vencimento é obrigatória.",
						})}
					>
						{(inputProps) => (
							<TextField
								label="Vencimento"
								variant="outlined"
								{...inputProps}
								fullWidth
								error={!!errors.vencimento}
								helperText={errors.vencimento?.message}
								name="vencimento"
								inputProps={{ maxLength: 5 }}
								sx={commonTextFieldStyles}
							/>
						)}
					</InputMask>
					<TextField
						label="CVV"
						variant="outlined"
						{...register("cvv", { required: "CVV é obrigatório." })}
						flex={1}
						inputProps={{ maxLength: 3 }}
						error={!!errors.cvv}
						helperText={errors.cvv?.message}
						sx={commonTextFieldStyles}
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
						{...register("parcelas", {
							required: "Selecione o número de parcelas.",
						})}
						label="Parcelas"
						error={!!errors.parcelas}
					>
						{installmentOptions.map((option, index) => (
							<MenuItem key={index} value={index + 1}>
								{`${index + 1}x ${option.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}`}
							</MenuItem>
						))}
					</Select>
					{errors.parcelas && (
						<FormHelperText error>{errors.parcelas.message}</FormHelperText>
					)}
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
					Pagar
				</Button>
				<FinishModal open={open} onClose={() => setOpen(false)} />
			</Box>
			<Progress />
		</main>
	);
}
