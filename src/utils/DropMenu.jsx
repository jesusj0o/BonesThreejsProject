import { ChevronDown, ChevronRight } from "lucide-react";


const DropMenu = ({ icon: Icon, title, isOpen, onToggle, items }) => {
  return (
    <>
      <li className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer hover:text-[#4b99a3] font-semibold"
          onClick={onToggle}
        >
          <div className="flex items-center gap-2">
            <Icon size={20} />
            <span>{title}</span>
          </div>
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>

        {isOpen && (
          <ul className="mt-2 ml-6 space-y-2 text-white text-sm">
            {items.map(({ icon: SubIcon, label }, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 cursor-pointer hover:text-[#4b99a3]"
              >
                <SubIcon size={16} />
                <span>{label}</span>
              </li>
            ))} 
          </ul>
        )}
      </li>
    </>
  );
};

export default DropMenu;
