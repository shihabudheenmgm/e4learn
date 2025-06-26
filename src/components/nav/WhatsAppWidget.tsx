import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
    return (
        <Link href="https://wa.me/+911234678965" target="_blank" rel="noopener noreferrer" className="whatsappwidget">
            <FaWhatsapp size={28} />
        </Link>
    );
};

export default WhatsAppWidget;
