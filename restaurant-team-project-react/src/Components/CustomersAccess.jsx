import { useEffect, useState } from "preact/hooks";
import LoginForm from "./Access/LoginForm";
import Header from "./Header";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage"
import VisitPage from "./VisitPage";
import "./CustomersAccess.css"
import CartPage from "./CartPage";


const headerTabs = [
  {
    label : "HOME",
    id: 1
  },
  {
    label : "MENU",
    id: 2
  },
  {
    label : "VISIT US",
    id: 3
  },
  {
    label: "Cart",
    id: 4
  }
]

export default function CustomersAccess({ menu, setMenu, setAccess}) {

  const [cartItems, setCartItems] = useState([])
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="customer-page-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} headerTabs={headerTabs}/>
      {activeTab === 0 && <HomePage/>}
      {activeTab === 1 && <MenuPage menu = {menu} setMenu={setMenu} cartItems={cartItems}/>}
      {activeTab === 2 && <VisitPage/>}
      {activeTab === 3 && <CartPage cartItems={cartItems} setCartItems={setCartItems}/>}
      
      <br />
      And much more from customer's site
      <br />
      <LoginForm onAuthorisation={setAccess}></LoginForm>
    </div>
  );
}
