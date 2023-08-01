import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Editcv from "./pages/Editcv";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/edit_cv" element={<Editcv />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
