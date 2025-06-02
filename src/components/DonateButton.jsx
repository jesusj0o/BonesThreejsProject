import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <button
      onClick={() => window.open("https://buymeacoffee.com/jesusjo", "_blank")}
      className="fixed bottom-6 right-6 bg-[#FDB500] hover:bg-[#fdb500de] text-white p-3 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-300"
      aria-label="Donar"
      title="Donar"
    >
      <Heart size={24} />
    </button>
  );
}
