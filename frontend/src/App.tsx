import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ProtectedRoute } from './components/common/ProtectedRoute';

import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { DashboardHubPage } from './pages/DashboardHubPage';

// Independent Future Dashboards
import { PlacementDashboard } from './features/placement/PlacementDashboard';
import { HigherStudiesDashboard } from './features/higher-studies/HigherStudiesDashboard';
import { GovernmentExamsDashboard } from './features/government-exams/GovernmentExamsDashboard';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Protected Routes */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardHubPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/placement"
                element={
                  <ProtectedRoute>
                    <PlacementDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/higher-studies"
                element={
                  <ProtectedRoute>
                    <HigherStudiesDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/government-exams"
                element={
                  <ProtectedRoute>
                    <GovernmentExamsDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

