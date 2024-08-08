"use client";

import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

const simpleTextFieldStyles = {
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

export default function SimpleForm() {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<main>
			<h1>Login</h1>
			<form noValidate onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={2} width={400}>
					<TextField
						label="Email"
						type="email"
						{...register("email", { required: "Email is required" })}
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
					<TextField
						label="Password"
						type="password"
						{...register("password", { required: "Password is required" })}
						error={!!errors.password}
						helperText={errors.password?.message}
					/>
					<Button type="submit" variant="contained" color="primary">
						Login
					</Button>
				</Stack>
			</form>
		</main>
	);
}
