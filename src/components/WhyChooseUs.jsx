const reasons = [
  {
    icon: "💡",
    title: "No hidden surprises",
    text:
      "We provide a detailed inspection report based on 200+ parameters so you know the true condition of the car.",
  },
  {
    icon: "✅",
    title: "100% Safe transaction",
    text:
      "We verify all documents to ensure you don’t face any issues after purchase.",
  },
  {
    icon: "🙌",
    title: "Support at every stage",
    text:
      "Our managers help answer questions, verify information and negotiate prices.",
  },
  {
    icon: "💰",
    title: "Flexible purchase",
    text:
      "We offer car loans so buying a car doesn’t stretch you financially.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          Why choose us?
        </h2>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border hover:shadow-lg transition"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-4 font-bold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
