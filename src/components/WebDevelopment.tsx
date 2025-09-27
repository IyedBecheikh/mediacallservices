export default function WebDevelopment() {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-yellow-500 mb-8">Web Development</h2>
      <p className="text-gray-300 leading-relaxed mb-8">
        A strong online presence is essential. Our web development services
        combine design, technology, and performance to deliver websites and apps
        that make an impact.
      </p>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Frontend Development</h3>
          <p className="text-gray-400">
            Responsive, modern, and user-friendly interfaces crafted with the
            latest frameworks and standards.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Backend Systems</h3>
          <p className="text-gray-400">
            Reliable and scalable APIs, databases, and server-side logic to
            support your business operations.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Performance Optimization</h3>
          <p className="text-gray-400">
            Speed and stability are our priority—ensuring your users have a
            seamless experience every time.
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Custom Solutions</h3>
          <p className="text-gray-400">
            Tailored web applications that align perfectly with your company’s
            goals and workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
