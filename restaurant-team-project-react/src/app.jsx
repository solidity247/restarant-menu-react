import { useState } from "preact/hooks";
import "./app.css";
import AdminAccess from "./Components/AdminAccesComponents/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";
import { MenuProvider } from "./Components/MenuContext";

export function App() {
  const [access, setAccess] = useState("admin");

  function logOutAdmin() {
    setAccess("customer");
  }

  return (
    <>
      <MenuProvider>
        {access === "admin" && (
          <AdminAccess onAccessChange={logOutAdmin}></AdminAccess>
        )}
        {access === "customer" && <CustomersAccess setAccess={setAccess} />}
      </MenuProvider>
    </>
  );
}
