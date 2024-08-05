export default function PaymentTerm() {
	const getUpdatedDateTime = () => {
		const hours = new Date();
		hours.setMinutes(hours.getMinutes() + 30);

		const dateString = hours.toLocaleDateString("pt-BR");
		const timeString = hours.toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		});
		return `${dateString} - ${timeString}`;
	};
	const updatedDateTime = getUpdatedDateTime();
	return (
		<div
			style={{
				marginTop: "1rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<span
				style={{
					fontSize: "16px",
					fontWeight: "600",
					color: "#B2B2B2",
				}}
			>
				Prazo de pagamento:
			</span>
			<span
				style={{
					fontSize: "16px",
					fontWeight: "800",
					lineHeight: "21.82px",
					color: "#4D4D4D",
				}}
			>
				{updatedDateTime}
			</span>
		</div>
	);
}
