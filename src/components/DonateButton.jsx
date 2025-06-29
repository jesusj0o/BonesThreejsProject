import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <button
      onClick={() => window.open("https://buymeacoffee.com/jesusjo", "_blank")}
      className="fixed bottom-6 right-6 bg-[#063940] hover:bg-[#3e838c] text-white p-3 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-300"
      aria-label="Donar al desarrollador"
      title="Donar al desarrollador"
    >
      <Heart size={24} />
    </button>
  );
}
