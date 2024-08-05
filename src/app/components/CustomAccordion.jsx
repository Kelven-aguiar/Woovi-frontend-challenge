import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion() {
	return (
		<div>
			<Accordion sx={{ border: "none", boxShadow: "none" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon sx={{ color: "#4D4D4D" }} />}
				>
					<Typography
						sx={{
							fontSize: "16px",
							fontWeight: "800",
							color: "#4D4D4D",
							lineHeight: "21.82px",
						}}
					>
						Como funciona?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>Detalhes</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
