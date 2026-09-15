"use client";

import { createClient } from "@/lib/supabase/client";

export function GoogleLoginButton({ next }: { next?: string }) {
  const supabase = createClient();

  async function handleClick() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback${next ? `?next=${encodeURIComponent(next)}` : ""}`,
      },
    });
  }

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-900/15 py-3 text-sm font-medium text-ink-800 hover:bg-ink-900/5 transition-colors"
    >
      Continue with Google
    </button>
  );
}
