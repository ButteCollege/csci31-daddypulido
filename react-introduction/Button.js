function Button({ title }) {
    return (
      <button
    className="px-6 py-4 bg-indigo-100 hover:bg-indigo-200 active:bg-indigo-300 shadow-md transition-all cursor-pointer border-0 rounded-md">{title}</button>
    );
  }