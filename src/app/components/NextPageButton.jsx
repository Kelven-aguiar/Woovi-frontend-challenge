"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import copyIcon from "../../assets/copy.svg";
import CustomModal from "./PixModal";
import { PaymentContext } from "../contexts/paymentContext";

export default function NextPageButton({ path, content, icon, type }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const { setCheckedline } = useContext(PaymentContext);

	const handleClick = () => {
		if (type === "link") {
			router.push(`/${path}`);
		} else if (type === "trigger") {
			if (setCheckedline) {
				setCheckedline(true);
			}
			setOpen(true);
		}
	};

	const renderIcon = () =>
		icon === "copy" ? (
			<Image
				src={copyIcon}
				alt="copy"
				width={19}
				height={22}
				style={{ marginLeft: "8px", verticalAlign: "middle" }}
			/>
		) : icon === "arrow" ? (
			<ArrowRightIcon style={{ marginLeft: "8px", verticalAlign: "middle" }} />
		) : null;

	return (
		<div>
			<Button
				onClick={handleClick}
				variant="contained"
				sx={{
					borderRadius: "8px",
					backgroundColor: "#133A6F",
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					"&:hover": {
						backgroundColor: "#0C2750",
					},
					padding: "8px 16px",
					fontSize: "16px",
					lineHeight: "24px",
				}}
			>
				<span style={{ verticalAlign: "middle" }}>{content}</span>
				{renderIcon()}
			</Button>
			{type === "trigger" && (
				<CustomModal open={open} onClose={() => setOpen(false)} />
			)}
		</div>
	);
}
