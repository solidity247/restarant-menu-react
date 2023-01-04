import { useState } from "preact/hooks";
import "./app.css";
import { menu } from "./assets/menu";
import AdminAccess from "./Components/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";

const initialData = menu;

export function App() {
  const [data, setData] = useState(initialData);
  const [access, setAccess] = useState("customer");

  function logOutAdmin() {
    setAccess("customer");
  }

  return (
    <>
      {access === "admin" && (
        <AdminAccess
          onDataUpdate={setData}
          onAccessChange={logOutAdmin}
        ></AdminAccess>
      )}
      {access === "customer" && (
        <CustomersAccess
          data={data}
          onAccessChange={setAccess}
        ></CustomersAccess>
      )}
    </>
  );
}
