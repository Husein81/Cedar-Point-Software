import Link from "next/link";
import { contactInfo } from "./config";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Prefer direct contact?
        </h3>
        <p className="text-muted-foreground">
          Reach us anytime. Our team is available to discuss your specific needs
          and timeline.
        </p>
      </div>

      <div className="space-y-6">
        <Link
          href={`mailto:${contactInfo.email}`}
          className="flex items-start gap-4 group"
        >
          <div className="shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Mail className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Email</p>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {contactInfo.email}
            </p>
          </div>
        </Link>

        <Link
          href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
          className="flex items-start gap-4 group"
        >
          <div className="shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Phone className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Phone</p>
            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {contactInfo.phone}
            </p>
          </div>
        </Link>

        <div className="flex items-start gap-4">
          <div className="shrink-0 p-3 bg-primary/10 rounded-lg">
            <MapPin className="size-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Location</p>
            <p className="font-semibold text-foreground">
              {contactInfo.location}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border">
        <Clock className="size-5 text-primary shrink-0" />
        <p className="text-sm text-foreground">
          <span className="font-semibold">{contactInfo.responseTime}</span>
        </p>
      </div>
    </div>
  );
}