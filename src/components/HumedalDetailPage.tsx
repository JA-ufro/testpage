import React, { useState, useRef } from 'react';
import { Humedal, FloraFauna, Testimonio, PageView } from '../types';
import { Field } from './EditModal';

type Tab = 'general' | 'flora' | 'testimonios' | 'galeria';

// Placeholder SVG used when adding a new species image
const PLACEHOLDER_IMAGE_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDMwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNlMmU4ZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjBweCIgZmlsbD0iIzk0YTNiOCI+UHJldmlzdWFsaXphY2nDs248L3RleHQ+PC9zdmc+';


interface ModalOpenerProps {
    openEditModal: (title: string, fields: Field[], onSave: (data: any) => void) => void;
    openConfirmationModal: (title: string, message: string, onConfirm: () => void) => void;
}

const TabButton: React.FC<{ activeTab: Tab; tabName: Tab; label: string; onClick: (tab: Tab) => void }> = ({ activeTab, tabName, label, onClick }) => (
  <button
    onClick={() => onClick(tabName)}
    className={`px-3 sm:px-4 py-2 text-base sm:text-lg font-semibold transition-colors duration-300 whitespace-nowrap ${
      activeTab === tabName
        ? 'border-b-2 border-[#4A6C4A] text-[#4A6C4A]'
        : 'text-gray-500 hover:text-gray-800'
    }`}
  >
    {label}
  </button>
);

const EditButton: React.FC<{ onClick: () => void; text?: string; className?: string }> = ({ onClick, text = "Editar", className = '' }) => (
  <button onClick={onClick} className={`text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-md hover:bg-blue-200 transition-colors ${className}`}>
    {text}
  </button>
);

const DeleteButton: React.FC<{ onClick: () => void; }> = ({ onClick }) => (
   <button onClick={onClick} className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded-md hover:bg-red-200 transition-colors">
    Eliminar
  </button>
);

const AddButton: React.FC<{ onClick: () => void; text: string }> = ({ onClick, text }) => (
  <div className="mt-8 text-center">
    <button onClick={onClick} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
      {text}
    </button>
  </div>
);


const GeneralTab: React.FC<{ humedal: Humedal; isLoggedIn: boolean; onUpdate: (humedal: Humedal) => void } & Pick<ModalOpenerProps, 'openEditModal'>> = ({ humedal, isLoggedIn, onUpdate, openEditModal }) => {
   const handleEdit = (field: 'descripcionLarga' | 'ubicacion') => {
    if (field === 'descripcionLarga') {
        openEditModal(
            'Editar Descripción',
            [{ name: 'descripcionLarga', label: 'Descripción Larga', value: humedal.descripcionLarga, type: 'textarea' }],
            (data) => {
                if (data.descripcionLarga.trim() !== '') {
                    onUpdate({ ...humedal, descripcionLarga: data.descripcionLarga });
                }
            }
        );
    } else { // field === 'ubicacion'
        openEditModal(
            'Editar Ubicación y Mapa',
            [
                { name: 'ubicacion', label: 'Texto de Ubicación', value: humedal.ubicacion, type: 'text' },
                { name: 'mapaUrl', label: 'URL de Google Maps (Embed)', value: humedal.mapaUrl, type: 'textarea' }
            ],
            (data) => {
                if (data.ubicacion.trim() !== '' && data.mapaUrl.trim() !== '') {
                    onUpdate({ ...humedal, ubicacion: data.ubicacion, mapaUrl: data.mapaUrl });
                }
            }
        );
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-700">Descripción</h3>
        {isLoggedIn && <EditButton onClick={() => handleEdit('descripcionLarga')} />}
      </div>
      <p className="text-gray-600 leading-relaxed mb-8">{humedal.descripcionLarga}</p>
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-700">Ubicación</h3>
        {isLoggedIn && <EditButton onClick={() => handleEdit('ubicacion')} />}
      </div>
      <p className="text-gray-700 mb-4">{humedal.ubicacion}</p>
      <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          src={humedal.mapaUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${humedal.nombre}`}
        ></iframe>
      </div>
  </div>
  );
};

const FloraFaunaTab: React.FC<{ items: FloraFauna[]; isLoggedIn: boolean; onUpdate: (items: FloraFauna[]) => void; onImageClick: (imageUrl: string) => void; } & ModalOpenerProps> = ({ items, isLoggedIn, onUpdate, onImageClick, openEditModal, openConfirmationModal }) => {
    const handleEdit = (index: number) => {
        const item = items[index];
        openEditModal('Editar Especie', [
            { name: 'nombreComun', label: 'Nombre Común', value: item.nombreComun },
            { name: 'nombreCientifico', label: 'Nombre Científico', value: item.nombreCientifico },
            { name: 'descripcion', label: 'Descripción', value: item.descripcion, type: 'textarea' },
            { name: 'imagenUrl', label: 'Imagen', value: item.imagenUrl, type: 'image' },
        ], (data) => {
            const updatedItems = [...items];
            updatedItems[index] = { ...item, ...data };
            onUpdate(updatedItems);
        });
    };

    const handleDelete = (index: number) => {
        openConfirmationModal(
            'Confirmar Eliminación',
            `¿Seguro que quieres eliminar "${items[index].nombreComun}"? Esta acción no se puede deshacer.`,
            () => onUpdate(items.filter((_, i) => i !== index))
        );
    };
    
    const handleAdd = () => {
        openEditModal('Añadir Nueva Especie', [
            { name: 'nombreComun', label: 'Nombre Común', value: '' },
            { name: 'nombreCientifico', label: 'Nombre Científico', value: '' },
            { name: 'descripcion', label: 'Descripción', value: '', type: 'textarea' },
            { name: 'tipo', label: 'Tipo', value: '', type: 'select', options: [{value: 'flora', label: 'Flora'}, {value: 'fauna', label: 'Fauna'}] },
            { name: 'imagenUrl', label: 'Imagen', value: PLACEHOLDER_IMAGE_URL, type: 'image' }
        ], (data) => {
            const tipo = data.tipo.toLowerCase() as 'flora' | 'fauna';
            if (tipo !== 'flora' && tipo !== 'fauna') { 
                alert("Tipo inválido. Debe ser 'flora' o 'fauna'."); 
                return;
            }
            if (!data.nombreComun || !data.tipo) {
                alert("Nombre común y tipo son campos requeridos.");
                return;
            }
            
            const imagenUrl = (data.imagenUrl === PLACEHOLDER_IMAGE_URL || !data.imagenUrl)
              ? `https://picsum.photos/seed/${data.nombreComun.replace(/\s+/g, '')}/400/300`
              : data.imagenUrl;

            const newItem: FloraFauna = {
                nombreComun: data.nombreComun,
                nombreCientifico: data.nombreCientifico,
                descripcion: data.descripcion,
                tipo: tipo,
                imagenUrl: imagenUrl,
            };
            onUpdate([...items, newItem]);
        });
    };

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
                <img 
                  src={item.imagenUrl} 
                  alt={item.nombreComun} 
                  className="w-24 h-24 object-cover rounded-lg shadow-md flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => onImageClick(item.imagenUrl)}
                />
                <div>
                <h4 className="text-xl font-bold">{item.nombreComun}</h4>
                <p className="text-sm text-gray-500 italic mb-1">{item.nombreCientifico}</p>
                <p className="text-gray-600">{item.descripcion}</p>
                {isLoggedIn && (
                    <div className="mt-2 flex space-x-2">
                        <EditButton onClick={() => handleEdit(index)} />
                        <DeleteButton onClick={() => handleDelete(index)} />
                    </div>
                )}
                </div>
            </div>
            ))}
        </div>
        {isLoggedIn && <AddButton onClick={handleAdd} text="Añadir Especie" />}
    </div>
  );
};


const TestimoniosTab: React.FC<{ testimonios: Testimonio[]; isLoggedIn: boolean; onUpdate: (items: Testimonio[]) => void } & ModalOpenerProps> = ({ testimonios, isLoggedIn, onUpdate, openEditModal, openConfirmationModal }) => {
    const handleEdit = (index: number) => {
        const item = testimonios[index];
        openEditModal('Editar Testimonio', [
            { name: 'texto', label: 'Texto del Testimonio', value: item.texto, type: 'textarea' }
        ], (data) => {
            if (data.texto.trim() !== '') {
                const updatedItems = [...testimonios];
                updatedItems[index] = { ...item, texto: data.texto };
                onUpdate(updatedItems);
            }
        });
    };

    const handleDelete = (index: number) => {
        openConfirmationModal(
            'Confirmar Eliminación',
            '¿Seguro que quieres eliminar este testimonio?',
            () => onUpdate(testimonios.filter((_, i) => i !== index))
        );
    };

    const handleAdd = () => {
        openEditModal('Añadir Testimonio', [
            { name: 'autor', label: 'Autor', value: '' },
            { name: 'texto', label: 'Texto', value: '', type: 'textarea' }
        ], (data) => {
            const newId = testimonios.length > 0 ? Math.max(...testimonios.map(t => t.id)) + 1 : 1;
            const newTestimonio: Testimonio = { id: newId, autor: data.autor, texto: data.texto, fecha: new Date().toISOString().split('T')[0] };
            onUpdate([...testimonios, newTestimonio]);
        });
    };

    return (
        <div>
            <div className="space-y-6">
                {testimonios.map((testimonio, index) => (
                <div key={testimonio.id} className="bg-gray-100 p-4 rounded-lg border-l-4 border-[#5a8a5a]">
                    <p className="text-gray-700 italic">"{testimonio.texto}"</p>
                    <p className="text-right font-semibold text-gray-600 mt-2">- {testimonio.autor}</p>
                    {isLoggedIn && (
                        <div className="mt-3 flex justify-end space-x-2">
                            <EditButton onClick={() => handleEdit(index)} />
                            <DeleteButton onClick={() => handleDelete(index)} />
                        </div>
                    )}
                </div>
                ))}
            </div>
            {isLoggedIn && <AddButton onClick={handleAdd} text="Añadir Testimonio" />}
        </div>
    );
};

const GaleriaTab: React.FC<{ images: string[]; isLoggedIn: boolean; onUpdate: (images: string[]) => void; onImageClick: (imageUrl: string) => void; } & ModalOpenerProps> = ({ images, isLoggedIn, onUpdate, onImageClick, openConfirmationModal }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDelete = (index: number) => {
        openConfirmationModal(
            'Confirmar Eliminación',
            '¿Seguro que quieres eliminar esta imagen de la galería?',
            () => onUpdate(images.filter((_, i) => i !== index))
        );
    };

    const handleAddClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            if (files.length > 0) {
                // Fix: Cast file to Blob to resolve type error with URL.createObjectURL.
                const newImageUrls = files.map(file => URL.createObjectURL(file as Blob));
                onUpdate([...images, ...newImageUrls]);
            }
        }
        if (event.target) {
            event.target.value = '';
        }
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
                multiple
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img, index) => (
                <div key={index} className="relative group cursor-pointer" onClick={() => onImageClick(img)}>
                    <img src={img} alt={`Galería ${index + 1}`} className="w-full aspect-square object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105" />
                    {isLoggedIn && (
                        <div className="absolute top-2 right-2">
                            <button onClick={(e) => { e.stopPropagation(); handleDelete(index); }} className="bg-red-600 text-white rounded-full p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                ))}
            </div>
            {isLoggedIn && <AddButton onClick={handleAddClick} text="Añadir Imágenes" />}
        </div>
    );
};

interface HumedalDetailPageProps {
  humedal: Humedal;
  setCurrentView: (view: PageView) => void;
  isLoggedIn: boolean;
  onUpdateHumedal: (humedal: Humedal) => void;
  onImageClick: (imageUrl: string) => void;
}

const HumedalDetailPage: React.FC<HumedalDetailPageProps & ModalOpenerProps> = ({ humedal, setCurrentView, isLoggedIn, onUpdateHumedal, onImageClick, openEditModal, openConfirmationModal }) => {
  const [activeTab, setActiveTab] = useState<Tab>('general');

  return (
    <div className="container mx-auto px-6 py-12">
      <button 
        onClick={() => setCurrentView({ page: 'home' })}
        className="mb-8 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        &larr; Volver a Humedales
      </button>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{humedal.nombre}</h2>
        <p className="text-md sm:text-lg text-gray-500 mb-8">{humedal.subtitulo}</p>
        
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex flex-wrap -mb-px gap-x-2 sm:gap-x-4">
            <TabButton activeTab={activeTab} tabName="general" label="General" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="flora" label="Flora y Fauna" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="testimonios" label="Testimonios" onClick={setActiveTab} />
            <TabButton activeTab={activeTab} tabName="galeria" label="Galería" onClick={setActiveTab} />
          </nav>
        </div>
        
        <div>
          {activeTab === 'general' && <GeneralTab humedal={humedal} isLoggedIn={isLoggedIn} onUpdate={onUpdateHumedal} openEditModal={openEditModal}/>}
          {activeTab === 'flora' && <FloraFaunaTab items={humedal.floraYFauna} isLoggedIn={isLoggedIn} onUpdate={(newFloraFauna) => onUpdateHumedal({ ...humedal, floraYFauna: newFloraFauna })} onImageClick={onImageClick} openEditModal={openEditModal} openConfirmationModal={openConfirmationModal} />}
          {activeTab === 'testimonios' && <TestimoniosTab testimonios={humedal.testimonios} isLoggedIn={isLoggedIn} onUpdate={(newTestimonios) => onUpdateHumedal({...humedal, testimonios: newTestimonios})} openEditModal={openEditModal} openConfirmationModal={openConfirmationModal} />}
          {activeTab === 'galeria' && <GaleriaTab images={humedal.galeria} isLoggedIn={isLoggedIn} onUpdate={(newGaleria) => onUpdateHumedal({...humedal, galeria: newGaleria})} onImageClick={onImageClick} openEditModal={openEditModal} openConfirmationModal={openConfirmationModal} />}
        </div>
      </div>
    </div>
  );
};

export default HumedalDetailPage;