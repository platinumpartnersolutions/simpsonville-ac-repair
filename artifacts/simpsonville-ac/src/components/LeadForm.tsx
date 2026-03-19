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

  const cardStyle: React.CSSProperties = dark
    ? { background: "#fff", borderRadius: 14, padding: "28px 28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,.22)" }
    : { background: "#fff", borderRadius: 14, padding: "28px 28px 24px", border: "1.5px solid #d8e2f3", boxShadow: "0 4px 20px rgba(13,45,110,.08)" };

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
          <a href="tel:8109986747" className="cta-primary" style={{ display: "inline-flex" }}>
            📞 Call Now: (810) 998-6747
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={cardStyle}>
      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#0D2D6E", marginBottom: subtitle ? 4 : 18 }}>
        {title}
      </h3>
      {subtitle && <p style={{ fontSize: 13.5, color: "#666", marginBottom: 18, lineHeight: 1.6 }}>{subtitle}</p>}

      <form onSubmit={submit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handle} required placeholder="John Smith" />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="(810) 555-0000" />
        </div>
        <div className="form-group">
          <label>Service Needed *</label>
          <select name="service" value={form.service} onChange={handle} required>
            <option value="">Select a service…</option>
            {SERVICES.map((s, i) => <option key={i}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>ZIP Code *</label>
          <input name="zip" value={form.zip} onChange={handle} required placeholder="29681" maxLength={5} pattern="\d{5}" />
        </div>
        <button type="submit" className="form-submit">📅 Get a Free Estimate</button>
      </form>

      <div style={{ marginTop: 14, textAlign: "center", fontSize: 12.5, color: "#888" }}>
        Or call directly:{" "}
        <a href="tel:8109986747" style={{ color: "#0D2D6E", fontWeight: 700 }}>(810) 998-6747</a>
      </div>
    </div>
  );
}
