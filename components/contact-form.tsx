"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "./icons";
import { buttonClass } from "./ui";

const topics = ["Full-time role", "Freelance project", "Something else"] as const;

const field =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * No backend: the form composes an email and opens the visitor's mail app,
 * so nothing is stored or sent through a third party.
 */
export function ContactForm({ email }: { email: string }) {
  const id = useId();
  const [topic, setTopic] = useState<(typeof topics)[number]>("Freelance project");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `${topic}${name ? ` from ${name}` : ""}`;
    const signature = company ? `${name}, ${company}` : name;
    const body = `${message}\n\n${signature}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <fieldset>
        <legend className="mb-2 text-sm font-medium">What would you like to discuss?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <label
              key={t}
              className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent-soft has-[:checked]:text-fg has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--ring)] hover:text-fg"
            >
              <input
                type="radio"
                name="topic"
                value={t}
                checked={topic === t}
                onChange={() => setTopic(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="mb-2 block text-sm font-medium">
            Your name
          </label>
          <input
            id={`${id}-name`}
            name="name"
            required
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-company`} className="mb-2 block text-sm font-medium">
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={`${id}-company`}
            name="company"
            autoComplete="organization"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-message`} className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          placeholder="A few lines about the role or project, timeline and anything else that helps."
          className={`${field} resize-y`}
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${id}-hint`} className="text-sm text-muted">
          Opens your email app with the message ready to send.
        </p>
        <button type="submit" aria-describedby={`${id}-hint`} className={buttonClass("primary", "w-full sm:w-auto")}>
          Compose email <ArrowRight />
        </button>
      </div>
    </form>
  );
}
