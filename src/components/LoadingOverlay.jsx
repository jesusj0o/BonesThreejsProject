import { useState, useEffect } from "react";
import { X } from "lucide-react"; // Asegúrate de tener lucide-react instalado

export default function LoadingOverlay({ progress = 0, onFinish }) {
  const [visible, setVisible] = useState(true);
  const [internalProgress, setInternalProgress] = useState(progress);

  useEffect(() => {
    setInternalProgress(progress);
  }, [progress]);

  const handleClose = () => {
    setVisible(false);
    if (onFinish) onFinish();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md text-white px-4">
      {/* Botón cerrar (solo visible cuando progress >= 100) */}
      {internalProgress >= 100 && (
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors"
          aria-label="Close instructions"
        >
          <X size={24} />
        </button>
      )}

      <div className="bg-[#195e63] p-6 rounded-xl max-w-xl w-full text-center space-y-4 shadow-md">
        <h2 className="text-3xl font-bold">Bienvenido @user a Medical3D</h2>
        <h2 className="text-2xl font-bold">¿Cómo interactuar con el modelo?</h2>
        <ul className="text-left list-disc list-inside space-y-2 text-sm sm:text-base font-semibold mt-4">
          <li>🖱️ Haz clic sobre cualquier hueso para seleccionarlo.</li>
          <li>🎯 La cámara se moverá para enfocarlo automáticamente.</li>
          <li>📖 Usa el panel lateral para ver detalles del hueso.</li>
          <li>🔍 Usa la rueda del mouse para hacer zoom.</li>
        </ul>
      </div>

      {/* Progreso de carga */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-sm">
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden shadow">
          <div
            className="h-full bg-[#8ebdb6] transition-all duration-300"
            style={{ width: `${internalProgress}%` }}
          ></div>
        </div>
        <div className="text-sm mt-2 text-center text-white">
          Cargando modelos {internalProgress}%
        </div>
      </div>
    </div>
  );
}
