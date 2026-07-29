"use client";

import { FormEvent, useState } from "react";

// Free access key from https://web3forms.com — tied to twentyman.solutions@gmail.com
// as the delivery address. This key is meant to be public/client-side (same model as
// a reCAPTCHA site key); it only authorises sending TO the address it was created for,
// it cannot be used to read or redirect mail elsewhere.
const WEB3FORMS_ACCESS_KEY = "184be1e2-4b37-42cb-be5b-f0911d55262b";

type SendState = "idle" | "sending" | "sent" | "error";

export function QuoteForm() {
  const [notice, setNotice] = useState("");
  const [state, setState] = useState<SendState>("idle");

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);

    // Honeypot: real visitors never fill this in (it's hidden via CSS below).
    // Bots that auto-fill every field will, and Web3Forms silently drops the submission.
    if (form.get("botcheck")) {
      setState("sent");
      setNotice("Thanks — your quote request has been sent. We'll be in touch soon.");
      return;
    }

    const subject = `Free quote request — ${form.get("suburb") || "Sydney"}`;
    const details = [
      `Suburb: ${form.get("suburb") || ""}`,
      `Service: ${form.get("service") || ""}`,
      `Property: ${form.get("property") || ""}`,
      `Frequency: ${form.get("frequency") || ""}`,
      `Preferred timing: ${form.get("timing") || ""}`,
      "",
      "Priorities / extra information:",
      `${form.get("details") || ""}`,
    ].join("\n");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: form.get("name") || "Website quote request",
      name: form.get("name") || "",
      phone: form.get("phone") || "",
      email: form.get("email") || "",
      replyto: form.get("email") || "",
      message: details,
    };

    setState("sending");
    setNotice("Sending your quote request…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setState("sent");
        setNotice("Thanks — your quote request has been sent. We'll be in touch soon.");
        formEl.reset();
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch {
      setState("error");
      setNotice(
        "Sorry, that didn't send. Please try again, or contact us directly on 0406 075 725."
      );
    }
  }

  return (
    <form className="quote-form" onSubmit={submitQuote}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden="true"
      />
      <div className="field-grid">
        <label>Full name<input name="name" autoComplete="name" required /></label>
        <label>Contact number<input name="phone" type="tel" autoComplete="tel" required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
        <label>Suburb<input name="suburb" autoComplete="address-level2" required /></label>
        <label>Service required
          <select name="service" required defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Regular weekly cleaning</option>
            <option>Regular fortnightly cleaning</option>
            <option>One-off general clean</option>
            <option>Deep clean</option>
            <option>Move-in or move-out clean</option>
            <option>Home assistance</option>
            <option>Other / not sure</option>
          </select>
        </label>
        <label>Property
          <select name="property" required defaultValue="">
            <option value="" disabled>Choose property size</option>
            <option>Apartment / studio</option>
            <option>1–2 bedroom home</option>
            <option>3 bedroom home</option>
            <option>4 bedroom home</option>
            <option>5+ bedroom home</option>
          </select>
        </label>
        <label>Preferred frequency
          <select name="frequency" required defaultValue="">
            <option value="" disabled>Choose frequency</option>
            <option>Weekly</option>
            <option>Fortnightly</option>
            <option>Monthly</option>
            <option>One-off</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Preferred day or time<input name="timing" placeholder="e.g. Tuesday afternoon" /></label>
      </div>
      <label>Cleaning priorities or extra information
        <textarea name="details" rows={6} placeholder="Tell us about the condition, priority areas, pets, access or any specific tasks." />
      </label>
      <p className="form-helper">Submit the form and your quote request is emailed to us directly — no need to open your own mail app.</p>
      <button className="button button-primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send my quote request"}
      </button>
      {notice && (
        <p className="form-notice" role="status" data-state={state}>
          {notice}
        </p>
      )}
    </form>
  );
}
