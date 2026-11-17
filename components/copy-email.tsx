"use client";

import { useState } from "react";
import { Check, Copy } from "./icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      {copied ? <Check className="text-accent" /> : <Copy />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </button>
  );
}
