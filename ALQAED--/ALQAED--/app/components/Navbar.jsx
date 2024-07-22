const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl">Car Store</a>
        <div className="space-x-4">
          <a href="#home" className="text-gray-300">Home</a>
          <a href="#contact" className="text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
