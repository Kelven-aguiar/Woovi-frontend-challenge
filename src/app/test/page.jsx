import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

const CPFForm = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name="cpf"
				control={control}
				defaultValue=""
				render={({ field }) => (
					<InputMask
						mask="999.999.999-99"
						value={field.value}
						onChange={field.onChange}
					>
						{() => (
							<TextField
								{...field}
								label="CPF"
								variant="outlined"
								fullWidth
								inputProps={{ inputMode: "numeric" }}
							/>
						)}
					</InputMask>
				)}
			/>
			<button type="submit">Enviar</button>
		</form>
	);
};

export default CPFForm;
