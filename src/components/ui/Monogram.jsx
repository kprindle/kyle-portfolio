/** The "KP" mark: navy tile with a brass underline. Decorative; the name next to it is the label. */
export default function Monogram({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="var(--accent-fg)"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="600"
      >
        KP
      </text>
      <rect x="9" y="24" width="14" height="2" rx="1" fill="var(--brand-2)" />
    </svg>
  );
}
