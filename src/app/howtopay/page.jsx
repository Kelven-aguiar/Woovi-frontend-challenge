import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import Radiogroup from "../components/radiogroup";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between m-6 bg-white max-w-[464px] max-h-[1057px]">
			<Image src={wooviLogo} alt="Woovi Logo" width={123.51} height={36.65} />
			<div className="w-[325px] h-[33px] items-center flex m-5">
				<h1 className="text-[24px] font-extrabold leading-[32.74px] text-left text-gray-dark">
					João, como você quer pagar?
				</h1>
			</div>

			<section font-sans>
				<Radiogroup />
			</section>

			<div>Pix Parcelado</div>
		</main>
	);
}
