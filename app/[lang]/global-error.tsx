"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div
      style={{
        height: "100dvh",
        overflow: "hidden",
        color: "var(--text-white)",
      }}
    >
      <h1 className="text-slate-600 dark:text-slate-300">
        "Wystąpił nieoczekiwany błąd"
      </h1>
      <button onClick={reset}>Refresh</button>
    </div>
  );
}
