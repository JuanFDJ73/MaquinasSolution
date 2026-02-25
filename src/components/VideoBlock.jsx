export default function VideoBlock({ video }) {
  if (!video) return null;

  // Detect if it's a YouTube URL and convert to embed
  const getEmbedUrl = (url) => {
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
    if (ytMatch) {
      return `https://www.youtube.com/embed/${ytMatch[1]}`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(video);
  const isExternal = embedUrl.startsWith('http');

  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Video Explicativo
      </h3>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-900 aspect-video">
        {isExternal ? (
          <iframe
            src={embedUrl}
            title="Video explicativo"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={video}
            controls
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
