import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Form from "./Form/Form.jsx";

function App() {
  return (
    <>
      <Header heading="CV Builder" />
      <main className="main">
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
