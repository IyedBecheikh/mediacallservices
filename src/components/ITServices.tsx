export default function ITServices() {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">IT Services</h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        Our IT services are designed to help businesses grow with confidence. We
        manage, secure, and optimize your digital environment so you can focus
        on what matters most—your business.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Infrastructure</h3>
          <p className="text-gray-400">
            Robust hardware and software infrastructure setup for smooth,
            scalable business operations.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Cloud Solutions</h3>
          <p className="text-gray-400">
            Migrate, manage, and scale with secure cloud solutions that fit your
            industry requirements.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Cybersecurity</h3>
          <p className="text-gray-400">
            Advanced protection from digital threats with proactive monitoring
            and defense strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
