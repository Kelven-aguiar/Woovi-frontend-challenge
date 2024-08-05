"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import copyIcon from "../../assets/copy.svg";
import CustomModal from "./CustomModal";
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

	const Icon =
		icon === "copy" ? (
			<Image
				src={copyIcon}
				alt="copy"
				width={19}
				height={22}
				style={{ marginLeft: "8px" }}
			/>
		) : (
			<ArrowRightIcon style={{ marginLeft: "8px" }} />
		);

	return (
		<>
			<Button
				onClick={handleClick}
				variant="contained"
				sx={{
					borderRadius: "8px",
					backgroundColor: "#133A6F",
					"&:hover": {
						backgroundColor: "#0C2750",
					},
				}}
			>
				<span
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						textAlign: "center",
					}}
				>
					{content} {Icon}
				</span>
			</Button>
			{type === "trigger" && (
				<CustomModal open={open} onClose={() => setOpen(false)} />
			)}
		</>
	);
}
