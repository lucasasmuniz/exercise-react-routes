import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import MainPage from "./routes/Home/MainPage";
import Sales from "./routes/Home/Sales";
import Registration from "./routes/Home/Registration";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home"/> } /> 
          <Route path="home" element={<MainPage />} /> 
          <Route path="sales" element={<Sales />} /> 
          <Route path="registration" element={<Registration />} /> 
        </Route>
      </Routes>
    </BrowserRouter>

  )
}