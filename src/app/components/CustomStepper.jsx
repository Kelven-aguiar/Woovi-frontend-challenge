import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = [
	{ label: "1ª entrada no Pix", status: "selected" },
	{ label: "2ª entrada no cartão", status: "unselected" },
];

const CustomStepper = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<Stepper
				activeStep={-1}
				orientation="vertical"
				sx={{
					"& .MuiStepConnector-line": {
						borderColor: "#03D69D",
					},
				}}
			>
				{steps.map((step, index) => (
					<Step key={index}>
						<StepLabel
							StepIconComponent={() => {
								switch (step.status) {
									case "selected":
										return (
											<RadioButtonUncheckedIcon style={{ color: "#03D69D" }} />
										);
									case "unselected":
										return (
											<RadioButtonUncheckedIcon style={{ color: "#9E9E9E" }} />
										);
									case "verified":
										return <CheckCircleIcon style={{ color: "#03D69D" }} />;
									default:
										return (
											<RadioButtonUncheckedIcon style={{ color: "#9E9E9E" }} />
										);
								}
							}}
						>
							{step.label}
						</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default CustomStepper;
