export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6 mt-20 border-t border-gray-700">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold">Mediacall Services</p>
        <p>+33 745 599 380</p>
        <p>TOTLEBEN 32-31</p>
        <p>SOFIA, 1606, Bulgaria</p>
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Mediacall Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
