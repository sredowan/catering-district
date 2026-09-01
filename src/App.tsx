import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Route-level code-splitting: each page is loaded only when visited
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Team = lazy(() => import('./pages/Team'));
const MazIslam = lazy(() => import('./pages/MazIslam'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));

// Minimal loading fallback — keeps perceived load instant
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[#19355e]/15 border-t-[#19355e] rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#ffffff] text-[#19355e] font-sans selection:bg-[#64620B] selection:text-white overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="about/maz-islam" element={<MazIslam />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="team" element={<Team />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-of-service" element={<TermsOfService />} />
            </Route>

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
