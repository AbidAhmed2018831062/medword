import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import Navbar from "../Common/NavBar";
import UpdatedFooter from "../Common/UpdatedFooter";
import AboutHome from "./AboutHome";
import ContactUs from "./ContactUs";
import HeaderHome from "./HeaderHome";
import MedicalWriting from "./MedicalWriting";
import Publisher from "./Publisher";
import Scientific from "./Scientfici";
import ServicesHome from "./ServicesHome";
import MedicalTools from "./MedicalTool";
import Publishers from "./Publishers";
import { baseURL } from "../../Config";
function HomePage() {
  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    console.log(params);
    if (params.id) {
      axios
        .get(`${baseURL}/user/getprofile?id=${params.id}`)
        .then((res) => {
          console.log(res);
          Cookies.set("id", res.data.result.id, { expires: 365 });
          localStorage.setItem("id", res.data.result.id);
          Cookies.set("remtime", res.data.result.remtime, { expires: 365 });
          Cookies.set("time", res.data.result.time, { expires: 365 });
          Cookies.set("email", res.data.result.email, { expires: 365 });
          Cookies.set("name", res.data.result.name, { expires: 365 });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div>
      <Navbar />
      <HeaderHome />
      <Scientific />
      <MedicalWriting />
      <MedicalTools/>
      <AboutHome />
      <ServicesHome />
      {/* <Publisher /> */}
      <Publishers/>
      <ContactUs />
      <UpdatedFooter />
    </div>
  );
}

export default HomePage;
