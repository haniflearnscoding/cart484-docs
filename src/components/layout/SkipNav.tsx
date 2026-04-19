export function SkipNav() {
  return (
    <a
      href="#main-content"
      className={[
        'sr-only focus:not-sr-only',
        'focus:fixed focus:top-4 focus:left-4 focus:z-50',
        'focus:bg-bg focus:text-text-primary focus:border focus:border-border',
        'focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-mono',
        'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-text-primary',
      ].join(' ')}
    >
      Skip to main content
    </a>
  )
}
