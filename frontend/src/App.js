import { BrowserRouter, Routes, Route } from "react-router-dom"
// Import pages && Component
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Every thing should be here inside BrowserRouter */}
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
