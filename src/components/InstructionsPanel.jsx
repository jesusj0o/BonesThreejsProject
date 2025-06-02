import { Mouse, Move, Rotate3d, View } from "lucide-react";

export default function InstructionsPanel({ mode, setMode, onReset }) {
  const activeClass = "bg-gray-400 cursor-pointer rounded-md";
  const inactiveClass = "cursor-pointer rounded-md";

  return (
    <div
      className="
        absolute bottom-5 left-1/2 
        -translate-x-1/2 
        bg-gray-300 bg-opacity-50 
        text-black 
        px-5 py-2.5 
        rounded-2xl
        text-sm 
        flex flex-row gap-5 
        justify-center items-center 
        whitespace-nowrap 
        pointer-events-auto
        select-none
      "
    >
      <div
        onClick={() => setMode("rotate")}
        className={`flex items-center gap-2.5 px-3 py-1.5 ${
          mode === "rotate" ? activeClass : inactiveClass
        }`}
      >
        <Rotate3d size={18} />
        <span>Rotar modelo</span>
      </div>

      <div
        onClick={() => setMode("pan")}
        className={`flex items-center gap-2.5 px-3 py-1.5 ${
          mode === "pan" ? activeClass : inactiveClass
        }`}
      >
        <Move size={18} />
        <span>Mover modelo</span>
      </div>

      <div
        onClick={() => setMode("zoom")}
        className={`flex items-center gap-2.5 px-3 py-1.5 ${
          mode === "zoom" ? activeClass : inactiveClass
        }`}
      >
        <Mouse size={18} />
        <span>Zoom</span>
      </div>

      <div
        onClick={onReset}
        className="flex items-center gap-2.5 px-3 py-1.5 cursor-pointer rounded-2xl hover:bg-gray-400"
      >
        <View size={18} />
        <span>Reiniciar vista</span>
      </div>
    </div>
  );
}
