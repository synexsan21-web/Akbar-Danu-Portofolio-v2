
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Akbar Danu",
  description:
    "Retail Management student at Universitas Bojonegoro, interested in business operations, retail management, marketing strategies, and consumer behavior.",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
