"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SERVICE_OPTIONS, toPayload, validateContact, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "ok" | "error";

const LABELS: Record<Status, string> = {
  idle: "Envoyer votre message",
  sending: "Envoi en cours…",
  ok: "Message envoyé",
  error: "Envoyer votre message",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [notice, setNotice] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const payload = toPayload(Object.fromEntries(new FormData(form)));
    const found = validateContact(payload);
    setErrors(found);
    const first = Object.values(found)[0];
    if (first) {
      setStatus("error");
      setNotice(first);
      return;
    }

    setStatus("sending");
    setNotice("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
      resetTimer.current = setTimeout(() => setStatus("idle"), 2600);
    } catch {
      setStatus("error");
      setNotice("L’envoi a échoué. Réessayez, ou écrivez-nous directement sur WhatsApp.");
    }
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      <h2>Parlez-nous de votre projet</h2>
      <p className="sub">
        Plus nous en savons, mieux nous pouvons vous guider. Les champs facultatifs peuvent rester vides.
      </p>
      <div className="grid">
        <div className="f">
          <label htmlFor="n">Nom complet</label>
          <input id="n" name="name" type="text" autoComplete="name" autoCapitalize="words" aria-invalid={Boolean(errors.name)} />
        </div>
        <div className="f">
          <label htmlFor="e">Adresse e-mail</label>
          <input id="e" name="email" type="email" inputMode="email" autoCapitalize="none" spellCheck={false} autoComplete="email" aria-invalid={Boolean(errors.email)} />
        </div>
        <div className="f">
          <label htmlFor="p">
            Téléphone <em>facultatif</em>
          </label>
          <input id="p" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="f">
          <label htmlFor="c">
            Entreprise / Organisation <em>facultatif</em>
          </label>
          <input id="c" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="f full">
          <label htmlFor="s">Service souhaité</label>
          <select id="s" name="service" defaultValue="">
            <option value="" disabled>
              Choisir un service
            </option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="f full">
          <label htmlFor="d">Détails du projet</label>
          <textarea id="d" name="message" aria-invalid={Boolean(errors.message)} />
        </div>
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="send">
        <button type="submit" id="btn" className={status === "ok" ? "ok" : undefined} disabled={status === "sending"}>
          <span>{LABELS[status]}</span>
        </button>
        {notice && status === "error" ? <p role="alert">{notice}</p> : null}
      </div>
    </form>
  );
}
