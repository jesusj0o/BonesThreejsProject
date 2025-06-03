import { XCircle, Copy, ThumbsUp, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function BoneInfoPanel({ boneName, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayBone, setDisplayBone] = useState(null);

  useEffect(() => {
    if (boneName) {
      if (!isVisible) {
        setIsVisible(true);
        setDisplayBone(boneName);
        setTimeout(() => setIsAnimating(true), 50);
      } else {
        setIsAnimating(false);
        setTimeout(() => {
          setDisplayBone(boneName);
          setIsAnimating(true);
        }, 300);
      }
    } else {
      setIsAnimating(false);
      setTimeout(() => {
        setIsVisible(false);
        setDisplayBone(null);
      }, 500);
    }
  }, [boneName]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed top-0 right-0 h-full w-[350px] bg-gray-100 p-5 shadow-lg rounded-2xl
        flex flex-col justify-start
        transform transition-all duration-500 ease-in-out
        ${isAnimating ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} z-[60]
      `}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-700 bg-transparent border-none cursor-pointer"
        aria-label="Cerrar panel"
      >
        <XCircle size={24} />
      </button>

      {/* Contenido */}
      <div
        className={`mt-5 flex-grow transition-opacity duration-300 ease-in-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="mb-4 font-bold text-gray-800 text-2xl">{displayBone}</h3>
        <p className="italic text-[13px] text-gray-600">(Nombre en latín)</p>
        <p className="mt-6 text-sm text-gray-700 leading-relaxed">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
        </p>

        {/* Acciones */}
        <div className="mt-3 flex gap-4 text-gray-500 text-xs items-center">
          <button className="flex items-center gap-1 hover:text-[#063940] transition">
            <Copy size={16} />
            Copiar
          </button>
          <button className="flex items-center gap-1 hover:text-[#063940] transition">
            <ThumbsUp size={16} />
            Like
          </button>
          <button className="flex items-center gap-1 hover:text-[#063940] transition">
            <Volume2 size={16} />
            Leer
          </button>
        </div>
      </div>
    </div>
  );
}
