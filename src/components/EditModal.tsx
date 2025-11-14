import React, { useState, useEffect, useRef } from 'react';

export interface Field {
  name: string;
  label: string;
  value: string;
  type?: 'text' | 'textarea' | 'image' | 'select';
  options?: { value: string; label: string }[];
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Record<string, string>) => void;
  title: string;
  fields: Field[];
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, title, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    if (isOpen) {
      const initialData = fields.reduce((acc, field) => {
        acc[field.name] = field.value;
        return acc;
      }, {} as Record<string, string>);
      setFormData(initialData);
    }
  }, [isOpen, fields]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, [name]: newUrl }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Cerrar modal" className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(field => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">{field.label}</label>
              {field.type === 'textarea' ? (
                 <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white text-gray-900"
                    required
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white text-gray-900"
                  required
                >
                  <option value="" disabled>Seleccione una opción</option>
                  {field.options?.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'image' ? (
                <div className="mt-1">
                  <input
                    type="file"
                    id={field.name}
                    name={field.name}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    // Fix: The ref callback should not return a value. Wrapped assignment in curly braces.
                    ref={el => {fileInputRefs.current[field.name] = el;}}
                  />
                  <div className="flex items-center space-x-4">
                    <img 
                      src={formData[field.name] || 'https://via.placeholder.com/100'} 
                      alt="Previsualización" 
                      className="w-24 h-24 object-cover rounded-md bg-gray-100"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRefs.current[field.name]?.click()}
                      className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cambiar Imagen
                    </button>
                  </div>
                </div>
              ) : (
                <input
                    id={field.name}
                    name={field.name}
                    type="text"
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm bg-white text-gray-900"
                    required
                />
              )}
            </div>
          ))}
          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
              Cancelar
            </button>
            <button type="submit" className="bg-[#4A6C4A] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#5a8a5a] transition-colors">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;