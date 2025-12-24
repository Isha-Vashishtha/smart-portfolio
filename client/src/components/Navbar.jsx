function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#home" className="text-lg font-bold tracking-tight">
          Isha
        </a>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
