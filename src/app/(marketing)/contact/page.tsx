import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | Cedar Point Software",
  description:
    "Get in touch with Cedar Point Software. Let us know about your project and we'll help you find the perfect solution.",
};

export default function ContactPage() {
  return <Contact />;
}
