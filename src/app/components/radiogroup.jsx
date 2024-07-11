"use client";
import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import blueflag from "../../assets/blueflag.svg";

function RadioGroupExample() {
	const price = 30500.0; //Variavel que irá armazenar o valor de acordo com o BACKEND
	//Função para formatar o preço para BRL
	const formatPrice = (price) => {
		return price.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
			minimumFractionDigits: 2,
		});
	};
	const cashback = 300.0; //Variavel que irá armazenar o valor de acordo com o BACKEND
	// Função para formatar o cashback para BRL
	const formatCashback = (cashback) => {
		return cashback.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
			minimumFractionDigits: 2,
		});
	};

	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Box
			sx={{ display: "flex", flexDirection: "column" fontFamily: "Nunito" }}
	
		>
			<FormControl component="fieldset">
				<RadioGroup
					aria-label="opções"
					name="opções"
					value={value}
					onChange={handleChange}
					style={{
						position: "relative",
						border: `2px solid ${value ? "#03D69D" : "#E5E5E5"}`,
						borderRadius: "10px",
						transition: "border-color 0.1s ease",
						padding: "12px",
					}}
				>
					<FormControlLabel
						style={{}}
						value="opcao1"
						control={
							<Radio
								icon={<RadioButtonUncheckedIcon sx={{ opacity: 0.5 }} />}
								checkedIcon={<CheckCircleIcon style={{ color: "#03D69D" }} />}
								style={{}}
							/>
						}
						label={
							<div style={{}}>
								<span
									style={{
										display: "flex",
										position: "absolute",
										width: "67px",
										height: "27px",
										top: "-15px",
										left: "12px",
										fontFamily: "Nunito",
										fontSize: "18px",
										fontWeight: "600",
										lineHeight: "24px",
										color: "#4D4D4D",
										backgroundColor: "#E5E5E5",
										borderRadius: "100px",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									Pix
								</span>
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
										{" "}
										{formatPrice(price)}
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
										width: "387px",
										height: "33px",
										position: "relative",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "0 12px",
										backgroundImage: `url(${blueflag.src})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
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
											zIndex: 1,
										}}
									>
										🤑 {formatCashback(cashback)} de volta no seu Pix na hora
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
