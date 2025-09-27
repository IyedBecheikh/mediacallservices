export default function DataProcessing() {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">Data Processing</h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        Data is at the core of decision-making. Our processing services ensure
        your raw data is transformed into reliable, actionable insights.
      </p>
      <div className="space-y-6">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Data Pipelines</h3>
          <p className="text-gray-400">
            Automated workflows to collect, clean, and organize massive datasets
            efficiently.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Analytics & Reporting</h3>
          <p className="text-gray-400">
            Transform your information into powerful dashboards that drive smart
            business decisions.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Data Compliance</h3>
          <p className="text-gray-400">
            Stay compliant with GDPR and global data protection standards while
            keeping data safe and accessible.
          </p>
        </div>
      </div>
    </div>
  );
}
