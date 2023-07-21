import { Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SwipeableTemporaryDrawer from "./AdminMenu";
import ShowData from "./ShowData";
import CreateAdmin from "./CreateaNewAdmin";
import { Navigate } from "react-router-dom";
import { baseURL } from "../../Config";

function AdminHome() {
  const [data, setData] = useState([]);
  const [what, setWhat] = useState("Users");
  const [show, setShow] = useState(false);
  useEffect(() => {
    let use = "users";
    setShow(false);
    if (what === "Users") use = "users";
    else if (what === "Dashboard") use = "transac";
    else if (what === "Plans") use = "getplans";
    else if (what === "Create Plan") use = "createplan";
    if (use === "createplan") {
      setShow(true);
      return;
    }
    if(use==="Create Admin")
    {
      setShow(true);
      return;
    }
    axios
      .get(`${baseURL}/admin/${use}`)
      .then((res) => {
        console.log(res);
        setData(res.data.result);
        setShow(true);
      })
      .catch((err) => console.log(err));
  }, [what]);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <SwipeableTemporaryDrawer flex={1} setWhat={setWhat} />
        {/* {what === "Dashboard" && show && <DashBoard payment={data} />}
        {what === "Create Plan" && show && <CreatePlan />} */}
        {what==="Create Admin"&&show&&<Navigate to="/createadmin"></Navigate>}
        {what !== "Dashboard" && what !== "Create Plan" && what!=="Create Admin"&&show && (
          <ShowData what={what} data={data} />
        )}
      </Stack>
    </div>
  );
}

export default AdminHome;
