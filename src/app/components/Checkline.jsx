"use client";
import { useContext } from "react";
import Image from "next/image";
import checkline from "../../assets/checkline.svg";
import checklinechecked from "../../assets/checklinechecked.svg";
import { PaymentContext } from "../contexts/paymentContext";

export default function Checkline() {
	const { checkedline } = useContext(PaymentContext);

	return (
		<Image
			src={checkedline ? checklinechecked : checkline}
			alt="Checkline Icon"
			width={25}
			height={50}
		/>
	);
}
