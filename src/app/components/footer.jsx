import Image from "next/image";
import WooviLogo from "./WooviLogo";
import VerifiedSeal from "../../assets/verifiedSeal.svg";

export default function Footer() {
	return (
		<div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
			<Image src={VerifiedSeal} alt="Verified Seal" width={15} height={18} />
			<span style={{ color: "#B2B2B2" }}> Pagamento 100% seguro via:</span>
			<WooviLogo width="57.52" height="17.07" color="#B2B2B2" />
		</div>
	);
}
