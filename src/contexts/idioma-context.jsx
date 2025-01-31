import { createContext, useContext, useState } from "react";

// Crear el contexto para el idioma
const IdiomaContext = createContext();

// Proveedor de contexto que envolverá la aplicación
export const IdiomaProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Valor inicial

  const cambiarIdioma = () => {
    // Cambiar entre 'es' y 'en'
    setLanguage(prev => (prev === "es" ? "en" : "es"));
  };

  return (
    <IdiomaContext.Provider value={{ language, cambiarIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
};

// Hook personalizado para usar el idioma
export const useIdioma = () => {
  return useContext(IdiomaContext);
};
