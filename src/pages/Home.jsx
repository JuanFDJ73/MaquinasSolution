import { machines } from '../data/machines';
import MachineCard from '../components/MachineCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="mb-12 py-12 px-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-700 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-blue-400 bg-blue-900/50 px-3 py-1 rounded-full uppercase tracking-wider">
              DiverSolution
            </span>
            <span className="text-xs text-slate-400">Plataforma interna</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
            MaquinasSolution
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Plataforma interna de capacitación técnica para maquinaria DiverSolution
          </p>
        </div>
      </div>

      {/* Machines Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Máquinas disponibles</h2>
        <p className="text-slate-500 mb-8">Selecciona una máquina para acceder a su manual técnico completo.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}

          {/* Upcoming machine card */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-slate-300 p-6 flex flex-col items-center justify-center text-center min-h-[280px] opacity-70">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              En desarrollo
            </div>
            <h3 className="font-bold text-slate-700 text-lg mb-2">Nueva máquina</h3>
            <p className="text-slate-400 text-sm">Más información próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
