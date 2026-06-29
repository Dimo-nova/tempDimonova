"use client";
import { s } from "@/lib/style";

export default function OpenWAButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("dimonova:open-wa"))}
      style={s(
        "display:inline-flex;align-items:center;gap:8px;font:500 13px/1 'Instrument Sans',sans-serif;color:#FAF6F0;padding:10px 14px;border:1px solid #3A2F26;border-radius:999px;cursor:pointer"
      )}
    >
      <span style={s("width:10px;height:10px;border-radius:50%;background:#25D366")} />
      <span>{label}</span>
    </button>
  );
}
