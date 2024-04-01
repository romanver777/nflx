import { Routes, Route } from "react-router-dom";
import Main from "./main/main";
import Basket from "./basket/basket";
import NotFound from "./not-found/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
