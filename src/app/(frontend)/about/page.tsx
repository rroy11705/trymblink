import Footer from "@/components/layout/Footer";
import GoldenRule from "@/components/molecules/about/GoldenRule";
import Hero from "@/components/molecules/about/Hero";
import HowWeWork from "@/components/molecules/about/HowWeWork";
import Meaning from "@/components/molecules/about/Meaning";
import Story from "@/components/molecules/about/Story";
import Team from "@/components/molecules/about/Team";
import Contact from "@/components/molecules/common/Contact";
import { PageSource } from "@/types/contact";

export default function AboutPage() {
	return (
		<div className="font-sans">
			<main className="w-full">
				<Hero />
				<Story />
				<Meaning />
				<GoldenRule />
				<HowWeWork />
				<Contact pageSource={PageSource.ABOUT_US} />
				<Team />
			</main>
			<Footer />
		</div>
	);
}