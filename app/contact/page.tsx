import ContactForm from "@/components/ContactForm";
import NavBar from "@/components/NavBar";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Get Started — Cliqup",
  description: "Tell us about your brand and we'll get back within 24 hours with a custom growth plan.",
};

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
}
