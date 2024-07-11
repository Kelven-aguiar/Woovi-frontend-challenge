"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function RadioGroupExample() {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="opções"
					name="opções"
					value={value}
					onChange={handleChange}
				>
					<FormControlLabel
						value="opcao1"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon sx={{ opacity: 0.5 }} />}
								checkedIcon={<CheckCircleIcon style={{ color: "#03D69D" }} />}
							/>
						}
						label={
							<div style={{ display: "flex", flexDirection: "column" }}>
								<div>
									<span
										style={{
											fontFamily: "Nunito", //Nao funcional ainda
											fontSize: "24px",
											fontWeight: "800",
											lineHeight: "32.74px",
											textAlign: "left",
										}}
									>
										1x
									</span>
									<span
										style={{
											fontFamily: "Nunito",
											fontSize: "24px",
											fontWeight: "600",
											lineHeight: "32.74px",
											textAlign: "left",
										}}
									>
										R$30.500,00
									</span>
								</div>
								<span
									style={{
										fontFamily: "Nunito",
										fontSize: "16px",
										fontWeight: "600",
										lineHeight: "20px",
										textAlign: "left",
										color: "#03D69D",
									}}
								>
									Ganhe 3% de Cashback
								</span>
								<div
									style={{
										backgroundColor: "#133A6F",
										width: "387px",
										height: "33px",
										position: "relative",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "0 12px",
										borderRadius: "4px",
									}}
								>
									<span
										style={{
											fontFamily: "Nunito",
											fontSize: "16px",
											fontWeight: "800",
											lineHeight: "20px",
											textAlign: "left",
											color: "#fff",
										}}
									>
										🤑 R$ 300,00 de volta no seu Pix na hora
									</span>
								</div>
							</div>
						}
						sx={{
							justifyContent: "space-between",
							flexDirection: "row-reverse",
						}}
					/>
				</RadioGroup>
			</FormControl>
		</Box>
	);
}

export default RadioGroupExample;
