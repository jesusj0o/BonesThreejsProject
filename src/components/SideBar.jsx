import { useState } from "react";
import {
  ChevronFirst,
  ChevronLast,
  Bone,
  Skull,
  Dumbbell,
  Heart,
  BicepsFlexedIcon,
  Brain,
  Stethoscope
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
          h-screen bg-white text-gray-800 box-border shadow-md
          rounded-tr-2xl rounded-br-2xl overflow-hidden
        `}
      >
        {isOpen && (
          <>
            <h2 className="text-sky-800 mb-6 text-2xl text-center font-bold">Modelos 3D</h2>
   
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
          </>
        )}
      </aside>

      {/* toggle */}
      <div className="flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-20 bg-white rounded-r-full flex items-center justify-center"
        >
          <span className="text-gray-600">
            {isOpen ? <ChevronFirst /> : <ChevronLast />}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
