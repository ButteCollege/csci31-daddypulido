function Navbar() {
    return (
      <nav className="flex justify-between bg-indigo-50 p-6 items-center sticky top-0 shadow-lg">
        <div className="logo bg-indigo-600 rounded-full p-6 hover:scale-105 transition-all cursor-pointer"></div>
        <div className="flex gap-x-4 items-center">
          <Button title="Button One" />
          <Button title="Button Two" />
        </div>
      </nav>
    );
  }
  