import { lazy, Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PUBLIC_ROUTES } from './routes';

// Admin is not part of the public route manifest — it must never be prerendered
// or indexed (see PRIVATE_ROUTE_PREFIXES).
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Minimal loading fallback — keeps perceived load instant
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[#19355e]/15 border-t-[#19355e] rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  // Route-level code-splitting, driven by the shared manifest so client routing,
  // prerendering, and the sitemap can never drift apart.
  const routes = useMemo(
    () => PUBLIC_ROUTES.map((r) => ({ ...r, Component: lazy(r.load) })),
    []
  );

  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] text-[#19355e] font-sans selection:bg-[#64620B] selection:text-white overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routes.map(({ path, Component }) =>
                path === '/' ? (
                  <Route key={path} index element={<Component />} />
                ) : (
                  <Route key={path} path={path.slice(1)} element={<Component />} />
                )
              )}
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
