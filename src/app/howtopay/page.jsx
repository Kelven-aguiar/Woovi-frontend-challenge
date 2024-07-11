import Image from "next/image";
import wooviLogo from "../../assets/wooviLogo.svg";
import Radiogroup from "../components/radiogroup";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24 bg-white max-w-[464px] max-h-[1057px] font-sans">
			<Image src={wooviLogo} />
			<div className="">João, como você quer pagar?</div>
			<div>
				<Radiogroup />
			</div>

			<div className="">Pix Parcelado</div>
		</main>
	);
}
