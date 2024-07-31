"use client";
import React, { useContext } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { PaymentContext } from "./contexts/paymentContext";
import NextPageButton from "./components/NextPageButton";

const Page = () => {
	const { name, setName } = useContext(PaymentContext);

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	return (
		<div>
			<Box sx={{ padding: 2 }}>
				<Typography variant="h4" component="h1" gutterBottom color={"#E5E5E5"}>
					Desafio Woovi FrontEnd
				</Typography>
				<TextField
					label="Nome"
					variant="outlined"
					name="Nome"
					value={name}
					onChange={handleNameChange}
					sx={{
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
			</Box>
		</div>
	);
};

export default Page;
