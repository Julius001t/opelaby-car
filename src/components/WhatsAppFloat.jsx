const WhatsAppFloat = () => {
  const phoneNumber = "2348073972855";
  const message = encodeURIComponent(
    "Hello, I'm interested in buying a car from your website."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl z-50"
    >
      💬
    </a>
  );
};

export default WhatsAppFloat;
