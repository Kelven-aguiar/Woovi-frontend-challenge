"use client";
import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function CustomSelect() {
	const [value, setValue] = React.useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div style={{ width: 300, margin: "1rem" }}>
			<FormControl fullWidth variant="outlined">
				<InputLabel>Parcelas</InputLabel>
				<Select value={value} onChange={handleChange} label="Parcelas">
					<MenuItem value={1}>1x</MenuItem>
					<MenuItem value={2}>2x</MenuItem>
					<MenuItem value={3}>3x</MenuItem>
					<MenuItem value={4}>4x</MenuItem>
					<MenuItem value={5}>5x</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
