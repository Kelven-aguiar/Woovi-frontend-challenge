"use client";
import React from "react";
import { useContext } from "react";
import { Modal, Box, Typography } from "@mui/material";
import WooviLogo from "./WooviLogotemp";
import NextPageButton from "./NextPageButton";
import { PaymentContext } from "../contexts/paymentContext";

const PixModal = ({ open, onClose }) => {
	const paymentData = useContext(PaymentContext).paymentData;
	const value = paymentData.value;

	return (
		<Modal
			open={open}
			onClose={onClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					backgroundColor: "#03D69D",
					borderRadius: "8px",
					boxShadow: 24,
					padding: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<WooviLogo width={150} height={48} color={"#FFFFFF"} />
				<Typography
					variant="h6"
					component="h2"
					sx={{
						m: 1,
						color: "black",
						fontSize: "24px",
						fontWeight: "800",
						lineHeight: "32.74px",
					}}
				>
					Pagamento Pix confirmado!
				</Typography>
				{value === "1x" ? (
					<Typography
						variant="body1"
						sx={{
							mt: 2,
							color: "white",
							textAlign: "center",
							fontSize: "16px",
						}}
					>
						<div>Obrigado por vizualizar minha challenger!</div>

						<a
							href="https://github.com/Kelven-aguiar"
							style={{
								color: "white",
								textDecoration: "underline",
							}}
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/Kelven-aguiar
						</a>
						<div>
							Verifique também o pagamento com cartão, escolhendo pagar em 2x ou
							mais na tela anterior:
						</div>
					</Typography>
				) : (
					<Typography> </Typography>
				)}
				{value === "1x" ? (
					<NextPageButton
						icon="arrow"
						path="howtopay"
						content="Voltar"
						type="link"
					/>
				) : (
					<NextPageButton
						icon="arrow"
						path="payment-card"
						content="Prosseguir"
						type="link"
					/>
				)}
			</Box>
		</Modal>
	);
};

export default PixModal;
