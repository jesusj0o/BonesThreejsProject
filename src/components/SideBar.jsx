import { useState } from "react";
import {
  Bone,
  Skull,
  Dumbbell,
  Heart,
  BicepsFlexedIcon,
  Brain,
  Stethoscope,
  BookOpenText,
  BookCheck
} from "lucide-react";
import DropMenu from "../utils/DropMenu"; 


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSections, setOpenSections] = useState({
    skeleton: true,
    muscles: true,
    organs: true,
  });

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`
          transition-all duration-300
          ${isOpen ? "w-72 p-6" : "w-0 p-0"}
          h-screen bg-[#063940] text-white box-border shadow-md
          rounded-tr-2xl rounded-br-2xl overflow-hidden
        `}
      >
        {isOpen && (
          <>
            <h2 className="text-white mb-3 text-2xl text-center font-bold">Anatomy 3D</h2>
            <div className="border-t border-gray-300 mb-3 mx-3"></div>
   
            <ul className="space-y-3">
              <DropMenu
                icon={Bone}
                title="Esqueleto"
                isOpen={openSections.skeleton}
                onToggle={() => toggleSection("skeleton")}
                items={[
                  { icon: Skull, label: "Cráneo" },
                  { icon: Bone, label: "Columna" },
                  { icon: Bone, label: "Extremidades" },
                ]}
              />
              <DropMenu
                icon={Dumbbell}
                title="Músculos"
                isOpen={openSections.muscles}
                onToggle={() => toggleSection("muscles")}
                items={[
                  { icon: BicepsFlexedIcon, label: "Bíceps" },
                  { icon: BicepsFlexedIcon, label: "Tríceps" },
                  { icon: BicepsFlexedIcon, label: "Cuádriceps" },
                ]}
              />
              <DropMenu
                icon={Heart}
                title="Órganos"
                isOpen={openSections.organs}
                onToggle={() => toggleSection("organs")}
                items={[
                  { icon: Heart, label: "Corazón" },
                  { icon: Stethoscope, label: "Pulmones" },
                  { icon: Brain, label: "Cerebro" },
                ]}
              />
            </ul>
              <div className="border-t border-white mt-6 pt-4 px-2">
              <button className="flex items-center gap-2 text-sm hover:text-[#4b99a3] transition mb-3">
                <BookOpenText size={18} />
                <span>Artículos médicos</span>
              </button>
              <button className="flex items-center gap-2 text-sm hover:text-[#4b99a3] transition">
                <BookCheck size={18} />
                <span>Recomendar libros de anatomía</span>
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default SideBar;
