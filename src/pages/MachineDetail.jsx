import { useParams, Link } from 'react-router-dom';
import { machines } from '../data/machines';
import CategoryCard from '../components/CategoryCard';

export default function MachineDetail() {
  const { machineId } = useParams();
  const machine = machines.find((m) => m.id === machineId);

  if (!machine) {
    return (
      <div className="text-center py-24">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Máquina no encontrada</h2>
        <p className="text-slate-500 mb-6">La máquina que buscas no existe en el sistema.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Machine Header */}
      <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Manual técnico
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">{machine.name}</h1>
          <p className="text-slate-500 text-xl leading-relaxed">{machine.description}</p>
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {machine.categories.length} categorías disponibles
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 flex items-center justify-center">
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-auto object-contain max-h-96"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Categorías de capacitación
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {machine.categories.map((category) => (
            <CategoryCard key={category.id} category={category} machineId={machine.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
