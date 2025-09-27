export default function Telecommunication() {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">Telecommunication Services</h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        We bridge distances with advanced telecommunication systems that ensure
        businesses stay connected and productive across the globe.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Business Connectivity</h3>
          <p className="text-gray-400">
            High-speed, secure connections for seamless collaboration across
            offices and regions.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Enterprise Conferencing</h3>
          <p className="text-gray-400">
            Reliable voice and video conferencing solutions for effective team
            communication.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Global Reach</h3>
          <p className="text-gray-400">
            Build a truly global business with scalable telecommunication
            systems tailored for international operations.
          </p>
        </div>
      </div>
    </div>
  );
}
