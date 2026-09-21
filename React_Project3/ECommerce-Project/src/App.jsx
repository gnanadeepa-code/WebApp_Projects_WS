import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  //Route is used to move from page to another. For that we need to separately install npm react-router in our project
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<HomePage />} />
    </Routes>
  );
}

export default App;
