import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import qrcode from "../../assets/qrcode.svg";
import Button from "@mui/material/Button";
import copy from "../../assets/copy.svg";

export default function Home() {
	const pixPrice = 15300.0; //Variável que irá armazenar o valor de acordo com o BACKEND ou calculado

	// Função para formatar para BRL
	const formatPixPrice = (pixPrice) => {
		return pixPrice.toLocaleString("pt-BR", {
			style: "currency",
			currency: "BRL",
			minimumFractionDigits: 2,
		});
	};

	return (
		<main className="flex flex-col items-center justify-between p-10 max-w-[464px] max-h-[1057px]">
			<Image src={wooviLogo} />
			<div className="w-[421px] h-[66px] items-center flex flex-col ">
				<span className="text-2xl font-bold leading-[32.74px] text-gray-dark">
					João, pague a entrada de
				</span>
				<span className="text-2xl font-bold leading-[32.74px] text-gray-dark">
					{formatPixPrice(pixPrice)} pelo Pix
				</span>
			</div>

			<div className="flex items-center justify-center border-2 border-green-500 rounded-lg mb-4 w-[350px] h-[350px]">
				<Image src={qrcode} />
			</div>

			<Button
				variant="contained"
				sx={{
					width: "310px",
					height: "39px",
					borderRadius: "8px",
					backgroundColor: "#133A6F",
					"&:hover": {
						backgroundColor: "#0C2750",
					},
				}}
			>
				<span style={{ marginRight: "10px" }}>Clique para copiar QR CODE </span>{" "}
				{<Image src={copy} />}
			</Button>

			<div className="mt-4">
				<span className="text-sm font-semibold text-gray-light">
					Prazo de pagamento:
				</span>
				<span className="flex items-center text-base font-bold leading-[21.82px] text-gray-dark">
					15/12/2021 - 08:17
				</span>
			</div>

			<div className="mt-2">
				<span>1º entrada no Pix</span>
				<span>R$ 15.300,00</span>
			</div>

			<div className="mt-2">
				<span>2º entrada no cartão</span>
				<span>R$ 15.300,00</span>
			</div>
		</main>
	);
}
