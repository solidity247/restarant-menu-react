import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { data } from "./assets/data.js";
import AdminAccess from "./Components/AdminAccesComponents/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";

export function App() {
  const [menu, setMenu] = useState([...data]);
  const [access, setAccess] = useState("admin");

  // const [test, setTest] = useState("");

  // useEffect(() => {
  //   const restarauntData = async () => {
  //     const restData = await fetch("data.json");
  //     const data = await restData.json();
  //     setTest(data);
  //   };
  //   restarauntData();
  // }, []);

  // useEffect(()=>{console.log("data updated")}, [menu])

  function logOutAdmin() {
    setAccess("customer");
  }
  function onFormSubmit(formData) {
    if (!formData.dataIndex >= 0) {
      // menu[formData.dataIndex] = formData.collectedInfo;
      setMenu((prev) => {
        return (prev[formData.dataIndex] = formData.collectedInfo);
      });
    } else {
      setMenu((prev) => [...prev, formData.collectedInfo]);
    }
    debugger
    // console.log(formData);
    // // setMenu(prev=>{
    //   return []
    // })
  }

  return (
    <>
      {access === "admin" && (
        <AdminAccess
          menu={menu}
          onAccessChange={logOutAdmin}
          onFormSubmit={onFormSubmit}
        ></AdminAccess>
      )}
      {access === "customer" && (
        <CustomersAccess menu={menu} setAccess={setAccess} />
      )}
    </>
  );
}
