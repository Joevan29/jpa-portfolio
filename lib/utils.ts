export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  acid:   { bg: "var(--color-acid)",   text: "var(--color-ink)" },
  violet: { bg: "var(--color-violet)", text: "#fff" },
  coral:  { bg: "var(--color-coral)",  text: "#fff" },
  sky:    { bg: "var(--color-sky)",    text: "var(--color-ink)" },
  neon:   { bg: "var(--color-neon)",   text: "var(--color-ink)" },
}

export function getTagColor(color: string) {
  return TAG_COLORS[color] || TAG_COLORS.acid
}

// lerp untuk animasi smooth
export function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor
}
