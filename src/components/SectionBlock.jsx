import { useState } from 'react';

export default function SectionBlock({ subSection }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="px-4 pb-4 pt-2 bg-slate-50 border-t border-slate-200">
          <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{subSection.content}</p>
        </div>
      )}
    </div>
  );
}
