import { useState } from "preact/hooks";
import LoginForm from "./Access/LoginForm";
import Header from "./Header";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import VisitPage from "./VisitPage";
import "./CustomersAccess.css";
import CartPage from "./CartPage";

export default function CustomersAccess({ menu, setMenu, setAccess }) {
  // TODOS:
  // const [login, setLogin] = useState()
  // props.onAccessChange;
  // navbar (sidebar)|| header
  // conditional component for home
  // conditional component menu
  // conditional component about us (visit us)
  // component Cart
  // footer

  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const headerTabs = [
    {
      label: "HOME",
      id: 1,
    },
    {
      label: "MENU",
      id: 2,
    },
    {
      label: "VISIT US",
      id: 3,
    },
    {
      label: "Cart",
      id: 4,
    },
  ];
  console.log(cartItems);

  return (
    <div className="customer-page-container">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        headerTabs={headerTabs}
      />
      {activeTab === 0 && <HomePage />}
      {activeTab === 1 && (
        <MenuPage menu={menu} setMenu={setMenu} cartItems={cartItems} />
      )}
      {activeTab === 2 && <VisitPage setActiveTab={setActiveTab} />}
      {activeTab === 3 && <CartPage cartItems={cartItems} />}
      <br />
      And much more from customer's site
      <br />
      //Footer
      <LoginForm onAuthorisation={setAccess}></LoginForm>
    </div>
  );
}
