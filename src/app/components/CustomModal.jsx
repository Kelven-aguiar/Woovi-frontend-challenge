import React from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import WooviLogo from "./WooviLogo";
import NextPageButton from "./NextPageButton";

const style = {};

const CustomModal = ({ open, onClose }) => {
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
					id="modal-title"
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

				<NextPageButton path="payment-card" content="Prosseguir" type="link" />
			</Box>
		</Modal>
	);
};

export default CustomModal;
