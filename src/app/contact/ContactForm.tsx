"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const eventTypes = [
  "Corporate Conference",
  "Product Launch",
  "Government / Diplomatic Event",
  "Brand Activation",
  "Concert / Entertainment",
  "Exhibition / Trade Show",
  "Government / NGO Event",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  message: string;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#0C0C0C",
  border: "1px solid #222222",
  color: "#FFFFFF",
  fontFamily: "var(--font-inter), Inter, sans-serif",
  fontSize: "14px",
  padding: "12px 16px",
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-oswald), Oswald, sans-serif",
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#9CA3AF",
  marginBottom: "8px",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div style={{ backgroundColor: "#141414", border: "1px solid #222222", padding: "48px", textAlign: "center" }}>
        <div style={{ width: "64px", height: "64px", border: "2px solid #C41B1B", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px auto" }}>
          <Send size={28} color="#C41B1B" />
        </div>
        <h3 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", color: "#FFFFFF", marginBottom: "12px" }}>
          Message Sent!
        </h3>
        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", color: "#9CA3AF" }}>
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="ef-form-card" style={{ backgroundColor: "#141414", border: "1px solid #222222" }}>
      <h2 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", color: "#FFFFFF", marginBottom: "32px" }}>
        Tell Us About Your Event
      </h2>

      <div className="ef-grid-form">
        {/* Name */}
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
          />
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+250 788 000 000"
            style={inputStyle}
          />
        </div>

        {/* Event Type */}
        <div>
          <label style={labelStyle}>Event Type *</label>
          <select
            name="eventType"
            required
            value={form.eventType}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="" disabled>
              Select event type
            </option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label style={labelStyle}>Expected Date</label>
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            style={{ ...inputStyle, colorScheme: "dark" }}
          />
        </div>

        {/* Guest Count */}
        <div>
          <label style={labelStyle}>Expected Guests</label>
          <select
            name="guestCount"
            value={form.guestCount}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="" disabled>
              Select range
            </option>
            <option>Under 50</option>
            <option>50 – 100</option>
            <option>100 – 300</option>
            <option>300 – 500</option>
            <option>500 – 1,000</option>
            <option>1,000+</option>
          </select>
        </div>

        {/* Message */}
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Tell Us More *</label>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your event, theme, special requirements..."
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          marginTop: "24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: "#C41B1B",
          color: "#FFFFFF",
          fontFamily: "var(--font-oswald), Oswald, sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          padding: "16px 40px",
          border: "none",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          opacity: status === "sending" ? 0.6 : 1,
        }}
      >
        {status === "sending" ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
