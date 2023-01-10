import { useEffect, useState } from "preact/hooks";
import "./app.css";
import { data, udpadeData } from "./assets/data.js";
import AdminAccess from "./Components/AdminAccessComponents/AdminAccess";
import CustomersAccess from "./Components/CustomersAccess";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from "./Components/ContactForm";

export function App() {
  const [menu, setMenu] = useState(data);
  const [access, setAccess] = useState("customer");
  const [ darkMode, setDarkMode] = useState(false)

  // logOutAdmin function what switces state to render customers page
  function logOutAdmin() {
    setAccess("customer");
  }

  // data fetching functionality. commented out because using other way of data src
  // const [test, setTest] = useState("");
  // useEffect(() => {
  //   const restarauntData = async () => {
  //     const restData = await fetch("data.json");
  //     const data = await restData.json();
  //     setTest(data);
  //   };
  //   restarauntData();
  // }, []);

  // function onFormSubmit receives an object of 2 properties: information
  // from <ItemManageForm>:  collectedInfo = {id, name, category etc}, dataIndex. If dataIndex -1 we add new item, if positive, updatinx existing data element
  function onFormSubmit({ collectedInfo, dataIndex }) {
    let tempData = [...data];
    if (dataIndex < 0) {      
      if(data.some(item=>item.id === +collectedInfo.id || item.id === collectedInfo.id)){
        return "ID error"
      }
      
      // console.log("adding new element to data", collectedInfo);
      tempData[tempData.length] = collectedInfo;
      setMenu(tempData);
    } else {
      tempData[dataIndex] = collectedInfo;
      // console.log("updating existant element", dataIndex, collectedInfo);
      setMenu(tempData);
    }
    udpadeData(tempData);
    return "Success"
  }
  function deleteElementFromData(index) {
    const tempData = [...data];
    tempData.splice(index, 1);
    setMenu(tempData);
    udpadeData(tempData);
  }

  function App() {
    return (
      <div className="App">
        <ContactForm />
      </div>
    )
  }

  return (
    <div className={darkMode && "app-container"}>
      {access === "admin" ? (
        <AdminAccess
          menu={menu}
          onAccessChange={logOutAdmin}
          onFormSubmit={onFormSubmit}
          deleteElementFromData={deleteElementFromData}
          darkMode={darkMode}
          setDarkMode ={setDarkMode}
        />
      ) : (
        <CustomersAccess menu={menu} setMenu={setMenu} setAccess={setAccess} />
      )}
    </div>
  );
}
