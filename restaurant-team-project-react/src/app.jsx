import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { data } from "./assets/data.js";
import AdminAccess from "./Components/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";


export function App() {
  const [menu, setMenu] = useState([...data]);
  const [access, setAccess] = useState("customer");
  console.log(data)
  function logOutAdmin() {
    setAccess("customer");
  }
 
  return (
    <>
      {access === "admin" && (
        <AdminAccess
          onDataUpdate={setMenu}
          onAccessChange={logOutAdmin}
        ></AdminAccess>
      )}
      {access === "customer" && (
        <CustomersAccess
          menu={menu}
          setAccess={setAccess}
        />
      )}
    </>
  );
}
