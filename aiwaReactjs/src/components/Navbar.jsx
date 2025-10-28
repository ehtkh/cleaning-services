export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 sticky top-0 shadow-md z-50">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-500">
        Aaiwa
      </h1>
      <nav className="space-x-6 text-xl px-10">
        <a href="#home" className="hover:text-teal-500">
          Home
        </a>
        <a href="#services" className="hover:text-teal-500">
          Services
        </a>
        <a href="#about" className="hover:text-teal-500">
          Team
        </a>
        <a href="#contact" className="hover:text-teal-500">
          Contact
        </a>
      </nav>
    </header>
  );
}
