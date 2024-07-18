import React, { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
	const [paymentData, setPaymentData] = useState({
		value: "",
		installments: "",
		total: "",
	});

	return (
		<PaymentContext.Provider value={{ paymentData, setPaymentData }}>
			{children}
		</PaymentContext.Provider>
	);
};
