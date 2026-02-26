import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machines';
import SectionBlock from '../components/SectionBlock';
import VideoBlock from '../components/VideoBlock';

export default function CategoryDetail() {
  const { machineId, categoryId } = useParams();
  const machine = machines.find((m) => m.id === machineId);
  const category = machine?.categories.find((c) => c.id === categoryId);

  if (!machine || !category) {
    return (
      <div className="text-center py-24">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Categoría no encontrada</h2>
        <p className="text-slate-500 mb-6">La categoría que buscas no existe.</p>
        <Link to={machine ? `/maquinas/${machineId}` : '/'} className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          {machine.name}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">{category.title}</h1>
        <p className="text-slate-500 text-lg leading-relaxed">{category.content}</p>
      </div>

      {/* Sub-sections accordion */}
      {category.subSections && category.subSections.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Subcategorías
          </h2>
          <div className="space-y-3">
            {category.subSections.map((sub, index) => (
              <SectionBlock key={index} subSection={sub} />
            ))}
          </div>
        </div>
      )}

      {/* Image gallery */}
      {category.images && category.images.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Galería de imágenes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.images.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md bg-slate-100 aspect-video">
                <img
                  src={img}
                  alt={`${category.title} imagen ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.parentElement.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video */}
      {category.video && (
        <div className="mb-10">
          <VideoBlock video={category.video} />
        </div>
      )}

      {/* Back link */}
      <Link
        to={`/maquinas/${machineId}`}
        className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver a {machine.name}
      </Link>
    </div>
  );
}
