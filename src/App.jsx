import { useState } from "react";
import { useProgress } from '@react-three/drei'

import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import InstructionsPanel from "./components/InstructionsPanel";
import ModelViewer from "./components/ModelViewer";
import BoneInfoPanel from "./components/BoneInfoPanel";
import DonateButton from "./components/DonateButton";
import LoadingOverlay from "./components/LoadingOverlay";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mode, setMode] = useState("rotate");
  const [selectedBone, setSelectedBone] = useState(null);
  const [selectedModel, setSelectedModel] = useState("skeleton");
  const [resetCount, setResetCount] = useState(0);

   const [showOverlay, setShowOverlay] = useState(true); // overlay visible al inicio
  const { progress } = useProgress(); // porcentaje de carga

  const handleReset = () => {
    setSelectedBone(null);
    setResetCount((count) => count + 1);
  };

  return (
    <div className="w-screen h-screen bg-[#ededed] flex overflow-hidden">
        {showOverlay && (
        <LoadingOverlay
          progress={progress}
          onFinish={() => setShowOverlay(false)}
        />
      )}
      
      {sidebarOpen && (
        <SideBar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          setSelectedModel={setSelectedModel}
        />
      )}

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 flex relative">
          <div className="flex-1 flex items-center justify-center p-1 pr-[320px]">
            <div className="w-full h-full max-w-[1440px] flex">
              <div className="flex-1 relative">
                <ModelViewer
                  selectedModel={selectedModel}
                  selectedBone={selectedBone}
                  onBoneClick={setSelectedBone}
                  mode={mode}
                  resetCount={resetCount}
                />
                <InstructionsPanel
                  mode={mode}
                  setMode={setMode}
                  onReset={handleReset}
                />
              </div>
            </div>
          </div>

          <BoneInfoPanel
            boneName={selectedBone}
            onClose={handleReset}
          />
        </div>
      </div>
      <DonateButton />
    </div>
  );
}
