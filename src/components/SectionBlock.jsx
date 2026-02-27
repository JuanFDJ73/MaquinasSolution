import { useState, useMemo } from 'react';
import ImageLightbox from './ImageLightbox';

// Parses **bold** markers in text and returns React elements
function renderBoldText(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-slate-800">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function isImageUrl(url) {
  return /\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i.test(url);
}

function MediaEmbed({ url, title, onImageClick }) {
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
  if (isImageUrl(url)) {
    return (
      <div
        className="rounded-xl overflow-hidden shadow-md bg-slate-100 cursor-pointer group"
        onClick={() => onImageClick && onImageClick(url)}
      >
        <img
          src={url}
          alt={title || 'Imagen'}
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-200"
          onError={(e) => { e.target.parentElement.style.display = 'none'; }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl pointer-events-none">
          <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
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
  const [lightbox, setLightbox] = useState(null); // { images, index }
  const hasVideo = subSection.video && subSection.video.trim() !== '';
  const hasExtraContent = subSection.extraContent && subSection.extraContent.length > 0;

  // Collect all image URLs from extraContent for lightbox navigation
  const allImages = useMemo(() => {
    if (!subSection.extraContent) return [];
    const imgs = [];
    subSection.extraContent.forEach((block) => {
      if (block.type === 'image' && block.value && isImageUrl(block.value)) {
        imgs.push(block.value);
      }
      if (block.type === 'gallery' && block.items) {
        block.items.forEach((item) => {
          const url = item.value || item;
          if (isImageUrl(url)) imgs.push(url);
        });
      }
    });
    return imgs;
  }, [subSection.extraContent]);

  const openLightbox = (url) => {
    const idx = allImages.indexOf(url);
    if (idx !== -1) {
      setLightbox({ images: allImages, index: idx });
    } else {
      setLightbox({ images: [url], index: 0 });
    }
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-bold text-slate-800 text-base">{subSection.title}</span>
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
            <p className={`text-slate-600 text-base leading-relaxed whitespace-pre-line ${hasVideo ? 'flex-1' : ''}`}>
              {renderBoldText(subSection.content)}
            </p>
            {hasVideo && (
              <div className="sm:w-64 md:w-72 lg:w-80 flex-shrink-0">
                <div className="sticky top-20">
                  <p className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
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

          {/* Extra content blocks: mixed text, images, videos, galleries */}
          {hasExtraContent && (
            <div className="space-y-3 pt-2 border-t border-slate-200">
              {subSection.extraContent.map((block, idx) => {
                if (block.type === 'text') {
                  return (
                    <p key={idx} className="text-slate-600 text-base leading-relaxed whitespace-pre-line">
                      {renderBoldText(block.value)}
                    </p>
                  );
                }
                if (block.type === 'image') {
                  return (
                    <div key={idx}>
                      {block.label && (
                        <p className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">{block.label}</p>
                      )}
                      <div
                        className="rounded-xl overflow-hidden shadow-md bg-slate-100 w-40 h-28 sm:w-64 sm:h-40 md:w-125 md:h-80 cursor-pointer relative group"
                        onClick={() => openLightbox(block.value)}
                      >
                        <img
                          src={block.value}
                          alt={block.label || `Imagen ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl pointer-events-none">
                          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                }
                if (block.type === 'video') {
                  return (
                    <div key={idx}>
                      {block.label && (
                        <p className="text-sm font-semibold text-green-600 mb-1 flex items-center gap-1">
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
                if (block.type === 'gallery') {
                  return (
                    <div key={idx}>
                      {block.label && (
                        <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">{block.label}</p>
                      )}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-xs sm:max-w-lg md:max-w-2xl">
                        {block.items.map((item, i) => {
                          const url = item.value || item;
                          const label = item.label || `${block.label || 'Galería'} ${i + 1}`;
                          const isVideo = /\.(mp4|webm|ogg)(\?|$)/i.test(url);
                          return (
                            <div key={i} className="w-full">
                              {isVideo ? (
                                <div>
                                  {item.label && <p className="text-xs text-slate-500 mb-1 truncate">{item.label}</p>}
                                  <div className="rounded-xl overflow-hidden shadow-md bg-slate-900 aspect-video">
                                    <video src={url} controls className="w-full h-full object-contain" />
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  {item.label && <p className="text-xs text-slate-500 mb-1 truncate">{item.label}</p>}
                                  <div
                                    className="rounded-xl overflow-hidden shadow-md bg-slate-100 aspect-video cursor-pointer relative group"
                                    onClick={() => openLightbox(url)}
                                  >
                                    <img
                                      src={url}
                                      alt={label}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                      onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl pointer-events-none">
                                      <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
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

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}
