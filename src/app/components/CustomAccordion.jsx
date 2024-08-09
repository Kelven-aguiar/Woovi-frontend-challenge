import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { PaymentContext } from "../contexts/paymentContext";

export default function CustomAccordion() {
	const installments = useContext(PaymentContext).paymentData.installments;
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
					<Typography>
						Você realizará o pagamento de entrada no valor de{" "}
						{installments.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
						})}{" "}
						via Pix
					</Typography>
					<Typography>
						<p> </p>E poderá pagar o restante em até 6x no cartão!
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
