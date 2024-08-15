"use client";
import { useContext } from "react";
import Image from "next/image";
import checkpoint from "../../assets/checkpoint.svg";
import CheckpointChecked from "../../assets/checkpointChecked.svg";
import { PaymentContext } from "../contexts/paymentContext";

export default function Checkline() {
	const { checkedline } = useContext(PaymentContext);

	return (
		<Image
			src={checkedline ? CheckpointChecked : checkpoint}
			alt="Checkline Icon"
			width={16}
			height={16}
		/>
	);
}
