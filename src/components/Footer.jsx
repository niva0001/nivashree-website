function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Nivashree Masala
        </h2>

        <p className="mt-3 text-green-200">
          Natural Taste of Indian Families
        </p>

        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Products</a>
          <a href="#" className="hover:text-orange-400">Recipes</a>
          <a href="#" className="hover:text-orange-400">About</a>
          <a href="#" className="hover:text-orange-400">Contact</a>
        </div>

        <p className="mt-8 text-green-300 text-sm">
          © 2026 Nivashree Masala. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;