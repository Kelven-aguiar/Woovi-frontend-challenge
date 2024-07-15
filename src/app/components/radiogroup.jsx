"use client";
import React from "react";
import Blueflag from "../../assets/blueflag.svg";
import {
	RadioGroup,
	FormControlLabel,
	Radio,
	Box,
	Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const paymentOptions = [
	{
		pix: "Pix",
		value: "1x",
		installments: "30.500,00",
		cashback: "3%",
		cashbackFlag: "300,00",
		test: "R$ 300,00 de volta no seu Pix na hora",
	},
	{
		installmentPix: "Pix Parcelado",
		value: "2x",
		installments: "R$ 15.300,00",
		total: "R$ 30.600,00",
	},
	{
		value: "3x",
		installments: "R$ 10.196,66",
		total: "R$ 30.620,00",
	},
	{
		value: "4x",
		installments: "R$ 7.725,00",
		total: "R$ 30.900,00",
		bestOption: true,
	},
	{
		value: "5x",
		installments: "R$ 6.300,00",
		total: "R$ 31.500,00",
	},
	{
		value: "6x",
		installments: "R$ 5.283,33",
		total: "R$ 31.699,98",
	},
	{
		value: "7x",
		installments: "R$ 4.542,85",
		total: "R$ 31.800,00",
	},
];

const RadioGroupPayment = () => {
	const [selectedValue, setSelectedValue] = React.useState("2x");

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<RadioGroup value={selectedValue} onChange={handleChange}>
			{paymentOptions.map((option, index) => (
				<Box
					key={option.value}
					sx={{
						border:
							selectedValue === option.value
								? "2px solid #03D69D"
								: "2px solid #E5E5E5",
						borderTopLeftRadius:
							index === 0 ? "8px" : index === 1 ? "8px" : "0",
						borderTopRightRadius:
							index === 0 ? "8px" : index === 1 ? "8px" : "0",
						borderBottomLeftRadius:
							index === 0
								? "8px"
								: index === paymentOptions.length - 1
									? "8px"
									: "0",
						borderBottomRightRadius:
							index === 0
								? "8px"
								: index === paymentOptions.length - 1
									? "8px"
									: "0",
						padding: "16px",
						marginBottom: index === 0 ? "20px" : "0",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						position: "relative",
						backgroundColor:
							selectedValue === option.value ? "#f0fef9" : "#fff",
					}}
				>
					{option.pix && (
						<Box
							sx={{
								fontWeight: 800,
								position: "absolute",
								top: "-15px",
								left: "10px",
								backgroundColor: "#E5E5E5",
								height: "27px",
								width: "67px",
								alignItems: "center",
								display: "flex",
								justifyContent: "center",
								borderRadius: "100px",
							}}
						>
							{option.pix}
						</Box>
					)}
					{option.installmentPix && (
						<Box
							sx={{
								fontWeight: 800,
								position: "absolute",
								top: "-15px",
								left: "10px",
								backgroundColor: "#E5E5E5",
								height: "27px",
								width: "157px",
								alignItems: "center",
								display: "flex",
								justifyContent: "center",
								borderRadius: "100px",
							}}
						>
							{option.installmentPix}
						</Box>
					)}
					<FormControlLabel
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
						value={option.value}
						control={
							<Radio
								sx={{ order: 1, color: "#E5E5E5" }}
								checkedIcon={<CheckCircleIcon style={{ color: "#03D69D" }} />}
							/>
						}
						label={
							<Typography component="div">
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										fontSize: "24px",
										fontWeight: 800,
										lineHeight: "32.74px",
										flex: "1",
									}}
								>
									<Box sx={{ marginRight: "8px" }}>{option.value}</Box>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											fontSize: "24px",
											fontWeight: 600,
											lineHeight: "32.74px",
										}}
									>
										{option.installments}
									</Box>
								</Box>
								{option.total && (
									<Box
										sx={{
											fontWeight: 600,
											fontSize: "16px",
											lineHeight: "21.82px",
											color: "#AFAFAF",
										}}
									>
										Total: {option.total}
									</Box>
								)}
								{option.cashback && (
									<Box
										sx={{
											color: "#03D69D",
										}}
									>
										<Typography component="span">
											Ganhe{" "}
											<span style={{ fontWeight: 800 }}>{option.cashback}</span>{" "}
											de Cashback
										</Typography>
									</Box>
								)}
								{option.cashbackFlag && (
									<Box
										sx={{
											backgroundImage: `url(${Blueflag.src})`,
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
											backgroundPosition: "center",
											color: "#fff",
											padding: "2px 8px",
											borderRadius: "4px",
											marginTop: "8px",
											height: "100%",
											width: "100%",
										}}
									>
										🤑
										<Typography component="span">
											<Box component="span" sx={{ fontWeight: 600 }}>
												R$ {option.cashbackFlag} de volta no seu Pix na hora
											</Box>{" "}
										</Typography>
									</Box>
								)}
							</Typography>
						}
					/>
				</Box>
			))}
		</RadioGroup>
	);
};

export default RadioGroupPayment;
