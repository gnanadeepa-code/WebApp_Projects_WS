import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router";
import "./App.css";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  //Route is used to move from page to another. For that we need to separately install npm react-router in our project
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
