import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import MainPage from "./routes/Home/MainPage";
import Sales from "./routes/Home/Sales";
import Registration from "./routes/Home/Registration";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<MainPage />} ></Route>
          <Route path="sales" element={<Sales />} ></Route>
          <Route path="registration" element={<Registration />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}