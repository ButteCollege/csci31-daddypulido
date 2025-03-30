function App() {
  return (
    <div>
      <Navbar/>
      <div className="p-12">
        <Header />
        <Main />
        <Content paragraph="Hello there! I am Content #1"/>
        <Content paragraph="Hello there! I am Content #2"/>

      </div>
      <Footer />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
