import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"

function MenuPage({ menu, setMenu, cartItems}) {
  return (
    <div className="menu-page"> 
      
      <SearchMenu menu = {menu} setMenu={setMenu}/>
      <div>
        {menu.map((productDetails, index) => (
          <CardItem menu={menu} productDetails={productDetails} index={index} key={productDetails.id}  cartItems={cartItems} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
