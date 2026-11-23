import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://akbar-danu-portofolio-v2-5225.vercel.app"),
	title: "Akbar Danu | Portfolio",
	description:
		"Akbar Danu - Professional experience in production, sales, customer service, administration, and graphic design.",
	applicationName: "Akbar Danu",
	authors: [{ name: "Akbar Danu" }],
	keywords: [
		"Akbar Danu",
		"Portfolio",
		"Professional Experience",
		"Graphic Design",
		"Sales",
		"Administration",
	],
	openGraph: {
		type: "website",
		url: "https://akbar-danu-portofolio-v2-5225.vercel.app",
		title: "Akbar Danu | Portfolio",
		siteName: "Akbar Danu Portfolio",
		description: "Personal portfolio of Akbar Danu.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Akbar Danu Portfolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Akbar Danu",
	url: "https://akbar-danu-portofolio-v2-5225.vercel.app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
