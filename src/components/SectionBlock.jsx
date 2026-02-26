import { useState } from 'react';

function MediaEmbed({ url, title }) {
  if (!url) return null;

  // Detect YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  if (ytMatch) {
    return (
      <div className="rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${ytMatch[1]}`}
          title={title || 'Video'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Detect video file extensions
  if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
    return (
      <div className="rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-video">
        <video src={url} controls className="w-full h-full object-contain" />
      </div>
    );
  }

  // Detect image extensions
  if (/\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i.test(url)) {
    return (
      <div className="rounded-xl overflow-hidden shadow-md bg-slate-100">
        <img
          src={url}
          alt={title || 'Imagen'}
          className="w-full h-auto object-cover"
          onError={(e) => { e.target.parentElement.style.display = 'none'; }}
        />
      </div>
    );
  }

  // Default: treat as embeddable video (iframe)
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-video">
      <iframe
        src={url}
        title={title || 'Video'}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default function SectionBlock({ subSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasVideo = subSection.video && subSection.video.trim() !== '';
  const hasExtraContent = subSection.extraContent && subSection.extraContent.length > 0;

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-semibold text-slate-800 text-sm">{subSection.title}</span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-2 bg-slate-50 border-t border-slate-200 space-y-4">
          {/* Main content row: text on left, video on right */}
          <div className={`flex gap-4 ${hasVideo ? 'flex-col sm:flex-row' : ''}`}>
            <p className={`text-slate-600 text-sm leading-relaxed whitespace-pre-line ${hasVideo ? 'flex-1' : ''}`}>
              {subSection.content}
            </p>
            {hasVideo && (
              <div className="sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
                <div className="sticky top-20">
                  <p className="text-xs font-semibold text-green-600 mb-2 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Video Tutorial
                  </p>
                  <MediaEmbed url={subSection.video} title={`${subSection.title} - Video Tutorial`} />
                </div>
              </div>
            )}
          </div>

          {/* Extra content blocks: mixed text, images, videos */}
          {hasExtraContent && (
            <div className="space-y-3 pt-2 border-t border-slate-200">
              {subSection.extraContent.map((block, idx) => {
                if (block.type === 'text') {
                  return (
                    <p key={idx} className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                      {block.value}
                    </p>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <div key={idx}>
                      {block.label && (
                        <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">{block.label}</p>
                      )}
                      <div className="rounded-xl overflow-hidden shadow-md bg-slate-100 max-w-lg">
                        <img
                          src={block.value}
                          alt={block.label || `Imagen ${idx + 1}`}
                          className="w-full h-auto object-cover"
                          onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                        />
                      </div>
                    </div>
                  );
                }
                if (block.type === 'video') {
                  return (
                    <div key={idx}>
                      {block.label && (
                        <p className="text-xs font-semibold text-green-600 mb-1 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {block.label}
                        </p>
                      )}
                      <div className="max-w-lg">
                        <MediaEmbed url={block.value} title={block.label || `Video ${idx + 1}`} />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
