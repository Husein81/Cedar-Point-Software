"use client";

import { useEffect, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Mail, Loader2, CheckCircle, AlertCircle, Check } from "lucide-react";

const OTHER_OPTION = "Other";

const schema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    businessType: z.string().min(1, "Please select your business type"),
    interests: z.array(z.string()),
    otherInterest: z.string(),
    message: z.string().min(10, "Message must be at least 10 characters"),
  })
  .refine(
    (data) =>
      !data.interests.includes(OTHER_OPTION) ||
      data.otherInterest.trim().length > 0,
    {
      message: "Please describe what you're looking for",
      path: ["otherInterest"],
    }
  );

type ContactFormData = z.infer<typeof schema>;

type SubmitResult = { ok: true } | { ok: false; message: string };

const PRODUCTS = [...contactConfig.products, OTHER_OPTION];

export default function ContactForm() {
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      businessType: "",
      interests: [],
      otherInterest: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitResult(null);
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const json: { error?: string } = await response.json().catch(() => ({}));
        throw new Error(json.error ?? "Failed to send message");
      }
      reset();
      setSubmitResult({ ok: true });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or contact us directly.";
      setSubmitResult({ ok: false, message });
      dismissTimer.current = setTimeout(() => setSubmitResult(null), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          aria-invalid={!!errors.fullName}
          className="h-auto px-4 py-2.5"
          {...register("fullName")}
        />
      </FormField>

      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          placeholder="example@domain.com"
          aria-invalid={!!errors.email}
          className="h-auto px-4 py-2.5"
          {...register("email")}
        />
      </FormField>

      <FormField label="Business Type" htmlFor="businessType" error={errors.businessType?.message}>
        <Controller
          name="businessType"
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="businessType"
                className="w-full h-auto py-2.5"
                aria-invalid={!!errors.businessType}
              >
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
          )}
        />
      </FormField>

      <Controller
        name="interests"
        control={control}
        render={({ field }) => (
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">
              What are you interested in?{" "}
              <span className="text-muted-foreground/60 font-normal">
                (optional)
              </span>
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {PRODUCTS.map((product) => {
                const isSelected = field.value.includes(product);
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
                      onChange={() =>
                        field.onChange(
                          isSelected
                            ? field.value.filter((p) => p !== product)
                            : [...field.value, product]
                        )
                      }
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

            {field.value.includes(OTHER_OPTION) && (
              <FormField error={errors.otherInterest?.message}>
                <Input
                  type="text"
                  placeholder="Tell us what you're looking for..."
                  autoFocus
                  aria-invalid={!!errors.otherInterest}
                  className="h-auto px-4 py-2.5"
                  {...register("otherInterest")}
                />
              </FormField>
            )}
          </fieldset>
        )}
      />

      <FormField label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          placeholder="Tell us about your requirements..."
          rows={5}
          aria-invalid={!!errors.message}
          className={cn(
            "w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground text-sm",
            "placeholder:text-muted-foreground/60 outline-none transition-colors resize-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
            "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20"
          )}
          {...register("message")}
        />
      </FormField>

      {submitResult && <SubmitBanner result={submitResult} />}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 text-base font-semibold rounded-lg"
      >
        {isSubmitting ? (
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

type FormFieldProps = {
  label?: string;
  htmlFor?: string;
  error?: string;
  children: React.ReactNode;
};

function FormField({ label, htmlFor, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      {error && <FieldError message={error} />}
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <p className="flex items-center gap-1.5 text-xs text-destructive">
      <AlertCircle className="size-3.5 shrink-0" />
      {message}
    </p>
  );
}

function SubmitBanner({ result }: { result: SubmitResult }) {
  if (result.ok) {
    return (
      <div className="flex items-start gap-3 p-4 rounded-lg border bg-success-muted border-success/30 text-success-muted-foreground">
        <CheckCircle className="size-5 text-success shrink-0 mt-0.5" />
        <p className="text-sm">
          Thank you! We&apos;ve received your message and will get back to you
          shortly.
        </p>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-destructive/10 border-destructive/30 text-destructive">
      <AlertCircle className="size-5 shrink-0 mt-0.5" />
      <p className="text-sm">{result.message}</p>
    </div>
  );
}
