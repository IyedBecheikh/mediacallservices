export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 text-gold z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* logo file png*/}
        <img src="/logo.png" alt="Mediacall Services" width={150} height={50} />  

        <ul className="flex space-x-6 text-gray-300">
          <li><a href="#hero" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#it-services" className="hover:text-yellow-500">IT Services</a></li>
          <li><a href="#data-processing" className="hover:text-yellow-500">Data Processing</a></li>
          <li><a href="#web-development" className="hover:text-yellow-500">Web Development</a></li>
          <li><a href="#telecommunication" className="hover:text-yellow-500">Telecommunication</a></li>
          <li><a href="#voip" className="hover:text-yellow-500">VoIP</a></li>
        </ul>
      </div>
    </nav>
  );
}
