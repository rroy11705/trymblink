import Footer from "@/components/layout/Footer";
import Contact from "@/components/molecules/common/Contact";
import Hero from "@/components/molecules/contact/Hero";
import { PageSource } from "@/types/contact";

export default function ContactPage() {
	return (
		<div className="font-sans">
			<main className="w-full">
				<Hero />
				<Contact pageSource={PageSource.CONTACT} />
			</main>
			<Footer />
		</div>
	);
}