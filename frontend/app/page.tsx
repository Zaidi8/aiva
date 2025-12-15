'use client'
import { useState } from 'react';
import { Sidebar } from '../components/layout/Sidebar';
import { LoginPage } from '../components/pages/LoginPage';
import { DashboardPage } from '../components/pages/DashboardPage';
import { AppointmentsPage } from '../components/pages/AppointmentsPage';
import { PatientsPage } from '../components/pages/PatientsPage';
import { AIReceptionistPage } from '../components/pages/AIReceptionistPage';
import { NotificationsPage } from '../components/pages/NotificationsPage';
import { AnalyticsPage } from '../components/pages/AnalyticsPage';
import { SettingsPage } from '../components/pages/SettingsPage';

export type PageType = 'login' | 'dashboard' | 'appointments' | 'patients' | 'ai-receptionist' | 'notifications' | 'analytics' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'dashboard':
        return <DashboardPage />;
      case 'appointments':
        return <AppointmentsPage />;
      case 'patients':
        return <PatientsPage />;
      case 'ai-receptionist':
        return <AIReceptionistPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-[#F7F9FB]">
      <Sidebar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
