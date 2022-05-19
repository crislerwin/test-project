import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ReducerScreen from "../pages/reducer";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/reducers" element={<ReducerScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
