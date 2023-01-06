import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { data } from "./assets/data.js";
import AdminAccess from "./Components/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";

export function App() {
  const [menu, setMenu] = useState(data);
  const [access, setAccess] = useState("customer");
  const [test, setTest] = useState("");
  // console.log(test);
  function logOutAdmin() {
    setAccess("customer");
  }

  useEffect(() => {
    const restarauntData = async () => {
      const restData = await fetch("data.json");
      const data = await restData.json();
      setTest(data);
    };
    restarauntData();
  }, []);

  return (
    <>
      {access === "admin" ? (
        <AdminAccess onDataUpdate={setMenu} onAccessChange={logOutAdmin} />
      ) : (
        <CustomersAccess menu={menu} setAccess={setAccess} />
      )}
    </>
  );
}
