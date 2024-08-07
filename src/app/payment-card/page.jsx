"use client";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentContext } from "../contexts/paymentContext";
import Progress from "../components/progress";
import InputMask from "react-input-mask";
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

const createPaymentFormSchema = z.object({
	nomeCompleto: z.string().min(1, "Nome é obrigatório."),
	cpf: z
		.string()
		.nonempty("CPF é obrigatório")
		.min(11, "CPF deve conter 11 dígitos."),
	numeroCartao: z.string().min(16, "Número do cartão é obrigatório."),
	vencimento: z.string().min(1, "Data de vencimento é obrigatória."),
	cvv: z.string().min(3, "CVV é obrigatório."),
	parcelas: z.number().min(1, "Selecione o número de parcelas."),
});

export default function PaymentForm() {
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
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(createPaymentFormSchema),
	});

	function createPayment(data) {
		//Função para lidar com os dados do pagamento
		console.log(data);
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
				<Controller
					name="nomeCompleto"
					control={control}
					render={({ field }) => (
						<TextField
							label="Nome Completo"
							variant="outlined"
							{...field}
							fullWidth
							error={!!errors.nomeCompleto}
							helperText={errors.nomeCompleto?.message}
							sx={commonTextFieldStyles}
						/>
					)}
				/>
				<Controller
					name="cpf"
					control={control}
					render={({ field }) => (
						<InputMask
							mask="999.999.999-99"
							maskChar=""
							maskPlaceholder=""
							{...field}
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
					)}
				/>
				<Controller
					name="numeroCartao"
					control={control}
					render={({ field }) => (
						<InputMask
							mask="9999 9999 9999 9999"
							maskChar=""
							maskPlaceholder=""
							{...field}
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
					)}
				/>
				<Box
					sx={{
						display: "flex",
						gap: 2,
					}}
				>
					<Controller
						name="vencimento"
						control={control}
						render={({ field }) => (
							<InputMask mask="99/99" maskChar="" {...field}>
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
						)}
					/>
					<Controller
						name="cvv"
						control={control}
						render={({ field }) => (
							<TextField
								label="CVV"
								variant="outlined"
								{...field}
								flex={1}
								inputProps={{ maxLength: 3 }}
								error={!!errors.cvv}
								helperText={errors.cvv?.message}
								sx={commonTextFieldStyles}
							/>
						)}
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
					<Controller
						name="parcelas"
						control={control}
						render={({ field }) => (
							<Select {...field} label="Parcelas" error={!!errors.parcelas}>
								{installmentOptions.map((option, index) => (
									<MenuItem key={index} value={index + 1}>
										{`${index + 1}x ${option.toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}`}
									</MenuItem>
								))}
							</Select>
						)}
					/>
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
					Enviar
				</Button>
			</Box>
			<Progress />
		</main>
	);
}
