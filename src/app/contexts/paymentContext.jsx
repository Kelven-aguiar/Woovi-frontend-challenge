"use client";
import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
	const [paymentData, setPaymentData] = useState({
		value: "",
		installments: "",
		total: "",
	});

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
