import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
