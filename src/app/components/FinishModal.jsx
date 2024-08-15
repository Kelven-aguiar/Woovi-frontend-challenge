import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import WooviLogo from "./WooviLogotemp";

const FinishModal = ({ open, onClose }) => {
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
						textAlign: "center",
					}}
				>
					Pagamento do Pix e do cartão confirmado!
				</Typography>
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
				</Typography>
			</Box>
		</Modal>
	);
};

export default FinishModal;
