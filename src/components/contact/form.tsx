"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactConfig } from "./config";
import {
  Mail,
  Loader2,
  CheckCircle,
  AlertCircle,
  Check,
} from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

type ContactFormData = {
  fullName: string;
  email: string;
  businessType: string;
  interests: string[];
  otherInterest: string;
  message: string;
};

const labelClass = "mb-2";

const EMPTY_FORM: ContactFormData = {
  fullName: "",
  email: "",
  businessType: "",
  interests: [],
  otherInterest: "",
  message: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBusinessTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businessType: value }));
  };

  const handleCheckboxChange = (product: string) => {
    setFormData((prev) => {
      const isRemoving = prev.interests.includes(product);
      return {
        ...prev,
        interests: isRemoving
          ? prev.interests.filter((p) => p !== product)
          : [...prev.interests, product],
        ...(product === "Other" && isRemoving ? { otherInterest: "" } : {}),
      };
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data: { error?: string } = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Failed to send message");
      }

      setFeedbackMessage(
        "Thank you! We've received your message and will get back to you shortly."
      );
      setFormState("success");
      setFormData(EMPTY_FORM);
    } catch (err) {
      setFeedbackMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us directly."
      );
      setFormState("error");
      setTimeout(() => {
        setFormState("idle");
        setFeedbackMessage("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName" className={labelClass}>
          Full Name
        </Label>
        <Input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          className="h-auto px-4 py-2.5"
        />
      </div>

      <div>
        <Label htmlFor="email" className={labelClass}>
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@domain.com"
          required
          className="h-auto px-4 py-2.5"
        />
      </div>

      <div>
        <Label htmlFor="businessType" className={labelClass}>
          Business Type
        </Label>
        <Select
          value={formData.businessType}
          onValueChange={handleBusinessTypeChange}
          required
        >
          <SelectTrigger id="businessType" className="w-full h-auto px-4 py-2.5">
            <SelectValue placeholder="Select your business type..." />
          </SelectTrigger>
          <SelectContent>
            {contactConfig.businessTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium mb-3">
          What are you interested in?{" "}
          <span className="text-muted-foreground/60 font-normal">(optional)</span>
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {[...contactConfig.products, "Other"].map((product) => {
            const isSelected = formData.interests.includes(product);
            return (
              <label
                key={product}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all duration-150",
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/40 hover:bg-muted/50"
                )}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCheckboxChange(product)}
                  className="sr-only"
                />
                <div
                  className={cn(
                    "size-4 rounded shrink-0 border-2 flex items-center justify-center transition-all duration-150",
                    isSelected ? "border-primary bg-primary" : "border-input"
                  )}
                >
                  {isSelected && (
                    <Check
                      className="size-2.5 text-primary-foreground"
                      strokeWidth={3}
                    />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {product}
                </span>
              </label>
            );
          })}
        </div>

        {formData.interests.includes("Other") && (
          <Input
            type="text"
            name="otherInterest"
            value={formData.otherInterest}
            onChange={handleInputChange}
            placeholder="Tell us what you're looking for..."
            autoFocus
            className="h-auto px-4 py-2.5 mt-2"
          />
        )}
      </fieldset>

      <div>
        <Label htmlFor="message" className={labelClass}>
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your requirements..."
          rows={5}
          required
          className={cn(
            "w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground",
            "placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
            "resize-none"
          )}
        />
      </div>

      {feedbackMessage && (
        <div
          className={cn(
            "flex items-start gap-3 p-4 rounded-lg border",
            formState === "success"
              ? "bg-success-muted border-success/30 text-success-muted-foreground"
              : "bg-destructive/10 border-destructive/30 text-destructive"
          )}
        >
          {formState === "success" ? (
            <>
              <CheckCircle className="size-5 text-success shrink-0 mt-0.5" />
              <p className="text-sm">{feedbackMessage}</p>
            </>
          ) : (
            <>
              <AlertCircle className="size-5 shrink-0 mt-0.5" />
              <p className="text-sm">{feedbackMessage}</p>
            </>
          )}
        </div>
      )}

      <Button
        type="submit"
        disabled={formState === "loading"}
        className="w-full h-11 text-base font-semibold rounded-lg"
      >
        {formState === "loading" ? (
          <>
            <Loader2 className="size-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail className="size-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
