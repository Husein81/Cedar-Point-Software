"use client";

import { useState } from "react";
import { Select } from "radix-ui";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { contactConfig } from "./config";
import {
  Mail,
  Loader2,
  CheckCircle,
  AlertCircle,
  Check,
  ChevronDown,
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

const inputClass = cn(
  "w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground",
  "placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
);

const labelClass = "block text-sm font-medium mb-2";

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

      if (!response.ok) throw new Error("Failed to send message");

      setFeedbackMessage(
        "Thank you! We've received your message and will get back to you shortly."
      );
      setFormState("success");
      setFormData(EMPTY_FORM);
    } catch {
      setFeedbackMessage(
        "Something went wrong. Please try again or contact us directly."
      );
      setFormState("error");
      // Auto-clear error so the user can retry without manual dismissal
      setTimeout(() => {
        setFormState("idle");
        setFeedbackMessage("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Enter your full name"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@domain.com"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="businessType" className={labelClass}>
          Business Type
        </label>
        <Select.Root
          value={formData.businessType}
          onValueChange={handleBusinessTypeChange}
          required
        >
          <Select.Trigger
            id="businessType"
            className={cn(
              inputClass,
              "flex items-center justify-between gap-2 cursor-pointer",
              "data-[state=open]:border-primary data-[state=open]:ring-2 data-[state=open]:ring-primary/50",
              "data-placeholder:text-muted-foreground/60"
            )}
          >
            <Select.Value placeholder="Select your business type..." />
            <Select.Icon asChild>
              <ChevronDown
                className="size-4 text-muted-foreground shrink-0 transition-transform duration-200 data-[state=open]:rotate-180"
              />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              position="popper"
              sideOffset={4}
              className={cn(
                "z-50 w-(--radix-select-trigger-width)",
                "bg-popover border border-border rounded-lg shadow-lg",
                "overflow-hidden",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
              )}
            >
              <Select.Viewport className="p-1">
                {contactConfig.businessTypes.map((type) => (
                  <Select.Item
                    key={type}
                    value={type}
                    className={cn(
                      "relative flex items-center justify-between px-4 py-2.5 rounded-md",
                      "text-sm text-foreground cursor-pointer outline-none",
                      "data-highlighted:bg-primary/5 data-highlighted:text-primary",
                      "data-[state=checked]:font-medium data-[state=checked]:text-primary"
                    )}
                  >
                    <Select.ItemText>{type}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check className="size-4 text-primary" />
                    </Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
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
          <input
            type="text"
            name="otherInterest"
            value={formData.otherInterest}
            onChange={handleInputChange}
            placeholder="Tell us what you're looking for..."
            autoFocus
            className={cn(inputClass, "mt-2")}
          />
        )}
      </fieldset>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your requirements..."
          rows={5}
          required
          className={cn(inputClass, "resize-none")}
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
