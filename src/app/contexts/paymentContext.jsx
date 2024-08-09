"use client";
import React, { createContext, useState, useEffect } from "react";

export const PaymentContext = createContext();
//Gerador de identificador
const generateIdentifier = () => {
	const array = new Uint8Array(16);
	window.crypto.getRandomValues(array);
	return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("");
};

export const PaymentProvider = ({ children }) => {
	const [paymentData, setPaymentData] = useState({
		value: "",
		installments: "",
		total: "",
		identifier: "",
		rest: "", 
	});

	useEffect(() => {
		if (!paymentData.identifier) {
			const newIdentifier = generateIdentifier();
			setPaymentData((prevData) => ({
				...prevData,
				identifier: newIdentifier,
			}));
		}
	}, [paymentData.identifier]);
	
// Gerar valor restante para pagar no cartão
	useEffect(() => {
		const total = paymentData.total
		const installments = paymentData.installments
		const rest = total - installments;
		setPaymentData((prevData) => ({
			...prevData,
			rest,
		}));

	}, [paymentData.total, paymentData.installments]);

	const [name, setName] = useState("");
	const [checkedline, setCheckedline] = useState(false);

	return (
		<PaymentContext.Provider
			value={{
				paymentData,
				setPaymentData,
				name,
				setName,
				checkedline,
				setCheckedline,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
};
