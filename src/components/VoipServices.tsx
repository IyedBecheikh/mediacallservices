export default function VoipServices() {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">VoIP Services</h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        We provide VoIP solutions that reduce costs, improve quality, and keep
        your business communication efficient and scalable.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Advanced Call Routing</h3>
          <p className="text-gray-400">
            Intelligent systems that direct calls to the right place every time.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">International Coverage</h3>
          <p className="text-gray-400">
            Affordable global connectivity with crystal-clear communication
            across borders.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Unified Communications</h3>
          <p className="text-gray-400">
            Integrate voice, video, and messaging into one seamless platform.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Reliability</h3>
          <p className="text-gray-400">
            Enterprise-grade uptime and support to keep your business connected
            24/7.
          </p>
        </div>
      </div>
    </div>
  );
}
