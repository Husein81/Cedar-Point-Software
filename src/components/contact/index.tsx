import ContactForm from "./form";
import ContactInfo from "./info";
import { contactConfig } from "./config";

export default function Contact() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="w-full bg-linear-to-b from-muted to-background py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {contactConfig.heading}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contactConfig.subtitle}
          </p>
        </div>
      </div>

      <div className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}