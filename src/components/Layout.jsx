import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-slate-900 font-bold text-lg tracking-tight">MaquinasSolution</span>
          </Link>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full font-medium">
              DiverSolution
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) return null;

  const crumbs = [{ label: 'Inicio', to: '/' }];

  pathnames.forEach((segment, index) => {
    const to = '/' + pathnames.slice(0, index + 1).join('/');
    // Decode URI components and capitalize first letter
    const label = decodeURIComponent(segment).replace(/-/g, ' ');
    crumbs.push({ label, to });
  });

  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6" aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={crumb.to} className="flex items-center gap-1">
          {index < crumbs.length - 1 ? (
            <>
              <Link to={crumb.to} className="hover:text-green-600 transition-colors capitalize">
                {crumb.label}
              </Link>
              <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          ) : (
            <span className="text-slate-800 font-medium capitalize">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-slate-50 font-[Inter,system-ui,sans-serif]">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!isHome && <Breadcrumb />}
          {children}
        </div>
      </main>
    </div>
  );
}
