import React, { useState } from 'react';
import { Humedal, PageView } from './types';
import { HUMEDALES_DATA } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import InformationPage from './components/InformationPage';
import ConservationPage from './components/ConservationPage';
import HumedalDetailPage from './components/HumedalDetailPage';
import LoginModal from './components/LoginModal';
import ImageModal from './components/ImageModal';
import EditModal, { Field } from './components/EditModal';
import ConfirmationModal from './components/ConfirmationModal';

interface ModalState<T> {
  isOpen: boolean;
  props: T;
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>({ page: 'home' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [humedalesData, setHumedalesData] = useState<Humedal[]>(HUMEDALES_DATA);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const [editModalState, setEditModalState] = useState<ModalState<{ title: string; fields: Field[]; onSave: (data: any) => void; }>>({
    isOpen: false,
    props: { title: '', fields: [], onSave: () => {} },
  });

  const [confirmationModalState, setConfirmationModalState] = useState<ModalState<{ title: string; message: string; onConfirm: () => void; }>>({
    isOpen: false,
    props: { title: '', message: '', onConfirm: () => {} },
  });

  const handleLogin = (user: string, pass: string): boolean => {
    if (user === 'admin' && pass === 'password123') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  const handleUpdateHumedal = (updatedHumedal: Humedal) => {
    setHumedalesData(currentData =>
      currentData.map(h => (h.id === updatedHumedal.id ? updatedHumedal : h))
    );
  };

  const openEditModal = (title: string, fields: Field[], onSave: (data: any) => void) => {
    setEditModalState({ isOpen: true, props: { title, fields, onSave } });
  };

  const openConfirmationModal = (title: string, message: string, onConfirm: () => void) => {
    setConfirmationModalState({ isOpen: true, props: { title, message, onConfirm } });
  };
  
  const closeModals = () => {
    setEditModalState(prev => ({ ...prev, isOpen: false }));
    setConfirmationModalState(prev => ({...prev, isOpen: false }));
  }

  const renderContent = () => {
    switch (currentView.page) {
      case 'home':
        return <HomePage humedales={humedalesData} setCurrentView={setCurrentView} />;
      case 'informacion':
        return <InformationPage />;
      case 'conservacion':
        return <ConservationPage />;
      case 'detalle':
        const humedal = humedalesData.find(h => h.id === currentView.id);
        if (humedal) {
          return <HumedalDetailPage 
            humedal={humedal} 
            setCurrentView={setCurrentView}
            isLoggedIn={isLoggedIn}
            onUpdateHumedal={handleUpdateHumedal}
            onImageClick={setSelectedImageUrl}
            openEditModal={openEditModal}
            openConfirmationModal={openConfirmationModal}
          />;
        }
        setCurrentView({ page: 'home' });
        return null;
      default:
        return <HomePage humedales={humedalesData} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header 
        setCurrentView={setCurrentView}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLoginModal(true)}
        onLogoutClick={handleLogout}
      />
      
      {showLoginModal && <LoginModal onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />}
      {selectedImageUrl && <ImageModal imageUrl={selectedImageUrl} onClose={() => setSelectedImageUrl(null)} />}
      
      <EditModal 
        isOpen={editModalState.isOpen}
        onClose={closeModals}
        onSave={(data) => {
          editModalState.props.onSave(data);
          closeModals();
        }}
        title={editModalState.props.title}
        fields={editModalState.props.fields}
      />
      
      <ConfirmationModal
        isOpen={confirmationModalState.isOpen}
        onClose={closeModals}
        onConfirm={() => {
          confirmationModalState.props.onConfirm();
          closeModals();
        }}
        title={confirmationModalState.props.title}
        message={confirmationModalState.props.message}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer setCurrentView={setCurrentView} />
    </div>
  );
};

export default App;