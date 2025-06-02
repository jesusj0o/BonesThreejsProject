import { useState, useRef, useEffect } from "react";
import { User, Heart, LogOut, Info } from "lucide-react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full h-16 bg-transparent flex items-center justify-end px-6 relative">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:brightness-95 transition"
        >
          <User size={24} className="text-gray-700" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2">
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
              <User className="w-4 h-4" />
              Mi perfil
            </button>
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Acerca de
            </button>
            <button className="w-full px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Donar
            </button>
            <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
