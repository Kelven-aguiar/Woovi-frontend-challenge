import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between m-6 bg-white max-w-[464px] max-h-[1057px]">
			<Image src={wooviLogo} alt="Woovi Logo" width={123.51} height={36.65} />
			<div className="w-[422px] h-[66px] items-center flex m-5">
				<h1 className="text-[24px] font-extrabold leading-[32.74px] text-left text-gray-dark">
					João, pague o restante em 1x no{" "}
					<span className="flex items-center justify-center">cartão</span>
				</h1>
			</div>
			<Box
				sx={{
					py: 2,
					display: "grid",
					gap: 2,
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				<Input
					style={{
						border: "2px solid #E5E7EB",
					}}
					placeholder="Digite seu nome completo…"
				/>
				<Input placeholder="Digite seu CPF" />
				<Input placeholder="Digite seu Número do cartão" />
				<Input placeholder="Type in here…" />
			</Box>
		</main>
	);
}
