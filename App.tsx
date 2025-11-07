
import React, { useState } from 'react';
import { PageView } from './types';
import { HUMEDALES_DATA } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import InformationPage from './components/InformationPage';
import ConservationPage from './components/ConservationPage';
import HumedalDetailPage from './components/HumedalDetailPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>({ page: 'home' });

  const renderContent = () => {
    switch (currentView.page) {
      case 'home':
        return <HomePage humedales={HUMEDALES_DATA} setCurrentView={setCurrentView} />;
      case 'informacion':
        return <InformationPage />;
      case 'conservacion':
        return <ConservationPage />;
      case 'detalle':
        const humedal = HUMEDALES_DATA.find(h => h.id === currentView.id);
        if (humedal) {
          return <HumedalDetailPage humedal={humedal} setCurrentView={setCurrentView} />;
        }
        // Fallback to home if humedal not found
        setCurrentView({ page: 'home' });
        return null;
      default:
        return <HomePage humedales={HUMEDALES_DATA} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header setCurrentView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};

export default App;