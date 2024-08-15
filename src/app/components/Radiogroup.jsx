"use client";
import React, { useContext, useEffect } from "react";
import { PaymentContext } from "../contexts/paymentContext";
import Blueflag from "./Blueflag";
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
		labelPix: "Pix",
		value: "1x",
		installments: 30500.0,
		cashback: "3%",
		cashbackFlag: "300,00",
	},
	{
		LabelinstallmentPix: "Pix Parcelado",
		value: "2x",
		installments: 15300.0,
		total: 30600.0,
	},
	{
		value: "3x",
		installments: 10196.66,
		total: 30620.0,
	},
	{
		value: "4x",
		installments: 7725.0,
		total: 30900.0,
		bestOption: "-3%",
	},
	{
		value: "5x",
		installments: 6300.0,
		total: 31500.0,
	},
	{
		value: "6x",
		installments: 5283.33,
		total: 31699.98,
	},
	{
		value: "7x",
		installments: 4542.85,
		total: 31800.0,
	},
];

const RadioGroupPayment = () => {
	const [selectedValue, setSelectedValue] = React.useState("2x");
	const { setPaymentData } = useContext(PaymentContext);

	useEffect(() => {
		const defaultOption = paymentOptions.find(
			(option) => option.value === "2x",
		);
		setPaymentData({
			value: defaultOption.value,
			installments: defaultOption.installments,
			total: defaultOption.total,
		});
	}, [setPaymentData]);

	const handleChange = (event) => {
		const selectedOption = paymentOptions.find(
			(option) => option.value === event.target.value,
		);
		setSelectedValue(event.target.value);
		setPaymentData({
			value: selectedOption.value,
			installments: selectedOption.installments,
			total: selectedOption.total,
		});
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
						marginBottom: index === 0 ? "20px" : "0px",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						position: "relative",
						width: "390px",
						backgroundColor:
							selectedValue === option.value ? "#f0fef9" : "#fff",
					}}
				>
					{option.labelPix && (
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
							{option.labelPix}
						</Box>
					)}
					{option.LabelinstallmentPix && (
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
							{option.LabelinstallmentPix}
						</Box>
					)}
					<FormControlLabel
						sx={{
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-between",
							width: "100%",
							margin: "0 auto",
							position: "relative",
							padding: "auto",
						}}
						value={option.value}
						control={
							<Radio
								sx={{
									display: "flex",
									order: 1,
									color: "#E5E5E5",
									width: "26px",
									height: "26px",
									marginTop: "3px",
									position: "absolute",
									right: "8px",
								}}
								checkedIcon={<CheckCircleIcon style={{ color: "#03D69D" }} />}
							/>
						}
						labelPlacement="end"
						label={
							<Box>
								<Typography component="div">
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											fontSize: "24px",
											fontWeight: 800,
											lineHeight: "32.74px",
											flex: "1",
											color: "#4D4D4D",
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
											{`${option.installments.toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}`}
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
											Total:{" "}
											{`${option.total.toLocaleString("pt-BR", {
												style: "currency",
												currency: "BRL",
											})}`}
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
												<span style={{ fontWeight: 800 }}>
													{option.cashback}
												</span>{" "}
												de Cashback
											</Typography>
										</Box>
									)}
								</Typography>
								{option.cashbackFlag && (
									<Box sx={{ position: "relative", height: "33px" }}>
										<Blueflag />
										<Typography
											sx={{
												position: "absolute",
												top: "50%",
												translate: "0 -50%",
												color: "#FFFFFF",
												left: "10px",
											}}
										>
											<Box component="span" sx={{}}>
												🤑{" "}
												<span style={{ fontWeight: 800 }}>
													R$ {option.cashbackFlag}{" "}
												</span>
												<span style={{ fontWeight: 600 }}>
													de volta no seu Pix na hora
												</span>
											</Box>{" "}
										</Typography>
									</Box>
								)}
								{option.bestOption && (
									<Box sx={{ position: "relative", height: "33px" }}>
										<Blueflag />
										<Typography
											sx={{
												position: "absolute",
												top: "50%",
												translate: "0 -50%",
												color: "#FFFFFF",
												left: "10px",
											}}
											component="span"
										>
											<Box component="span" sx={{}}>
												<span style={{ fontWeight: 800 }}>
													{option.bestOption} de juros:{" "}
												</span>
												<span style={{ fontWeight: 600 }}>
													Melhor opção de parcelamento
												</span>
											</Box>{" "}
										</Typography>
									</Box>
								)}
							</Box>
						}
					/>
				</Box>
			))}
		</RadioGroup>
	);
};

export default RadioGroupPayment;
