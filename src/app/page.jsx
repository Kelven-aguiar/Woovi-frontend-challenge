import Image from "next/image";
import wooviLogo from "../assets/wooviLogo.svg";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24 bg-white max-w-[464px] max-h-[1057px]">
			<Image src={wooviLogo} />
			<div>João, como você quer pagar?</div>
			<div className="border-black">
				Pix
				<div>1x R$ 30.500,00</div>
				<div>Ganhe 3% de Cashback</div>
				<div>R$300,00 de volta no seu Pix na hora</div>
			</div>
			<div className="">Pix Parcelado</div>
		</main>
	);
}
