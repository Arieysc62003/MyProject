import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Manager from "./pages/Manager";
import Details from "./pages/Details";
import Change from "./pages/Change";
import Cart from "./pages/Cart";
import AddCard from "./pages/addCard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Shop />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Details/:id" element={<Details />} />
            <Route path="/Change/:id" element={<Change />} />
            <Route path="/AddCard" element={<AddCard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
