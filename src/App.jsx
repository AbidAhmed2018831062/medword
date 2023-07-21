import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import AdminHome from "./Components/Admin/AdminHome";
import AdminSignIn from "./Components/Admin/AdminLogin";
import Chat from "./Components/ChatGpt";
import Articles from "./Components/ChatGpt/Articles";
import CheckTime from "./Components/ChatGpt/CheckTime";
import HistoryChat from "./Components/ChatGpt/HistoryChat";
import Reactpdf from "./Components/ChatGpt/ReactPDF";
import TextExtract from "./Components/ChatGpt/TextExtract";
import UnAuthorized from "./Components/Common/UnAuthorized";
import UpdatedFooter from "./Components/Common/UpdatedFooter";
import Contact from "./Components/Contact/Contact";
import Editor from "./Components/Document/Editor";
import HomePage from "./Components/Home/HomePage";
import LogIn from "./Components/LoginandSignup/Login";
import Signup from "./Components/LoginandSignup/Signup";
import Service from "./Components/Service/Service";
import ServicePageHome from "./Components/ServicePage/ServicePageHome";
import PaymentPage from "./Components/Payment/PaymentPage";
import CreateAdmin from "./Components/Admin/CreateaNewAdmin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/editor/:url" element={<Editor />}></Route>
        <Route path="/articles/:search" element={<Articles />}></Route>
        <Route path="/history/:id" element={<HistoryChat />}></Route>
        <Route path="/time" element={<CheckTime />}></Route>
        <Route path="/pdf" element={<Reactpdf />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<LogIn />}></Route>
        <Route path="/admin/login" element={<AdminSignIn />}></Route>
        <Route path="/admin/home" element={<AdminHome />}></Route>
        <Route path="/unauthor" element={<UnAuthorized />}></Route>
        <Route path="/servicepage" element={<ServicePageHome />}></Route>
        <Route path="/upd" element={<UpdatedFooter />}></Route>
        <Route path="/extract" element={<TextExtract />}></Route>
        <Route path="/createadmin" element={<CreateAdmin />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
