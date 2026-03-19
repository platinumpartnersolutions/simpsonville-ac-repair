import { useState } from "react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
  defaultService?: string;
}

const SERVICES = [
  "AC Repair",
  "AC Installation",
  "AC Replacement",
  "HVAC Repair",
  "Heat Pump Repair",
  "Furnace Repair",
  "AC Maintenance / Tune-Up",
  "Ductless Mini Split",
  "Emergency AC Repair",
  "Plumbing Service",
  "Electrical Service",
  "Other",
];

export function LeadForm({ title = "Request Service", subtitle, dark = false, defaultService = "" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: defaultService, zip: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const cardStyle: React.CSSProperties = {
    background: "#fff",
    borderRadius: 14,
    padding: "16px 18px 14px",
    ...(dark
      ? { boxShadow: "0 8px 40px rgba(0,0,0,.22)" }
      : { border: "1.5px solid #d8e2f3", boxShadow: "0 4px 20px rgba(13,45,110,.08)" }),
  };

  if (submitted) {
    return (
      <div style={cardStyle}>
        <div className="form-success">
          <div style={{ fontSize: 42, marginBottom: 14 }}>✅</div>
          <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#0D2D6E", marginBottom: 8 }}>
            Request Received!
          </h3>
          <p style={{ color: "#555", marginBottom: 20 }}>
            We'll call you back shortly to confirm your appointment.
          </p>
          <a href="tel:8647547291" className="cta-primary" style={{ display: "inline-flex" }}>
            📞 Call Now: 864-754-7291
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#0D2D6E", marginBottom: subtitle ? 3 : 12 }}>
        {title}
      </h3>
      {subtitle && <p style={{ fontSize: 13, color: "#666", marginBottom: 12, lineHeight: 1.5 }}>{subtitle}</p>}

      <form onSubmit={submit} noValidate>
        <div className="form-row" style={{ gap: 10, marginBottom: 8 }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="lf-name">Full Name *</label>
            <input
              id="lf-name"
              name="name"
              type="text"
              value={form.name}
              onChange={handle}
              required
              placeholder="John Smith"
              autoComplete="name"
            />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label htmlFor="lf-phone">Phone *</label>
            <input
              id="lf-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handle}
              required
              placeholder="864-555-0000"
              autoComplete="tel"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="lf-service">What do you need help with? *</label>
          <select
            id="lf-service"
            name="service"
            value={form.service}
            onChange={handle}
            required
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s, i) => <option key={i}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lf-zip">ZIP Code *</label>
          <input
            id="lf-zip"
            name="zip"
            type="text"
            inputMode="numeric"
            value={form.zip}
            onChange={handle}
            required
            placeholder="29681"
            maxLength={5}
            pattern="\d{5}"
            autoComplete="postal-code"
          />
        </div>
        <p style={{ fontSize: 11, color: "#999", lineHeight: 1.5, margin: "0 0 8px" }}>
          By submitting this form, you agree to be contacted by a licensed HVAC contractor in your area. Message and data rates may apply.
        </p>
        <button type="submit" className="form-submit">📅 Get My Free Estimate</button>
      </form>
    </div>
  );
}
