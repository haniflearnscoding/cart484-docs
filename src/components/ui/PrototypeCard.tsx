import Image from 'next/image'
import type { Prototype } from '@/lib/prototypes'

function ImagePlaceholder({ alt, accentColor }: { alt: string; accentColor: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="w-full aspect-[4/3] rounded-sm bg-surface border border-border flex items-center justify-center"
      style={{ borderLeftColor: accentColor, borderLeftWidth: '3px' }}
    >
      <span className="text-xs font-mono text-text-muted text-center px-4" aria-hidden="true">
        [Photo pending]
      </span>
    </div>
  )
}

export function PrototypeCard({ proto }: { proto: Prototype }) {
  return (
    <article
      aria-labelledby={`proto-${proto.slug}-title`}
      className="bg-surface border border-border rounded-sm overflow-hidden"
      style={{ borderLeftColor: proto.accentColor, borderLeftWidth: '3px' }}
    >
      {/* Image / Video */}
      <div className="w-full overflow-hidden bg-border">
        {proto.videoSrc ? (
          <video
            src={proto.videoSrc}
            aria-label={proto.imageAlt}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto"
          />
        ) : proto.imageSrc ? (
          <Image
            src={proto.imageSrc}
            alt={proto.imageAlt}
            width={proto.imageWidth}
            height={proto.imageHeight}
            className="w-full h-auto"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ) : (
          <ImagePlaceholder alt={proto.imageAlt} accentColor={proto.accentColor} />
        )}
      </div>

      <div className="p-6">
        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full border"
            style={{ color: proto.accentColor, borderColor: proto.accentColor }}
          >
            {String(proto.iteration).padStart(2, '0')}
          </span>
          <span className="text-xs font-mono text-text-muted">{proto.week}</span>
          <span className="text-xs font-mono text-text-muted ml-auto">{proto.material}</span>
        </div>

        {/* Title */}
        <h3
          id={`proto-${proto.slug}-title`}
          className="text-lg font-semibold text-text-primary mb-3 tracking-tight"
        >
          {proto.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-text-secondary mb-4">{proto.description}</p>

        {/* Feedback panels — only rendered when content is provided */}
        {(proto.feedbackDaud || proto.feedbackVytautas) && (
          <div className="space-y-2 border-t border-border pt-4">
            {proto.feedbackDaud && (
              <details className="group">
                <summary className="flex items-center justify-between text-xs font-mono text-text-muted hover:text-text-secondary transition-colors py-1">
                  <span>Daud&apos;s feedback</span>
                  <span className="group-open:rotate-180 transition-transform" aria-hidden="true">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {proto.feedbackDaud}
                </p>
              </details>
            )}
            {proto.feedbackVytautas && (
              <details className="group">
                <summary className="flex items-center justify-between text-xs font-mono text-text-muted hover:text-text-secondary transition-colors py-1">
                  <span>Vytautas&apos;s feedback (ProBlind)</span>
                  <span className="group-open:rotate-180 transition-transform" aria-hidden="true">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {proto.feedbackVytautas}
                </p>
              </details>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
