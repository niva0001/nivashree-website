import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918227885546"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-xl z-50 transition duration-300 hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;