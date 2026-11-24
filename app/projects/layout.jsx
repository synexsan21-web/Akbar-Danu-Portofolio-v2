
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Akbar Danu",
  description:
    "A collection of projects showcasing my work, skills, and experience in development and technology.",
};

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
