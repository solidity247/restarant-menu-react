import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"
import CategoryBtns from "./CategoryBtns";

function MenuPage({ menu, setMenu, cartItems, setCartItems}) {
  return (
    <div className="menu-page"> 
      {/* <div className="img-wrapper-menupage">
        <img  className="img-menu-page" src="https://tomdra.com/wp-content/uploads/2020/01/header-healthy.jpg" alt="burger" />

      </div> */}
      
      <div className="menu-body">
      <SearchMenu menu = {menu} setMenu = {setMenu}/>
      <CategoryBtns setMenu = {setMenu}/>
        {menu.map((productDetails, index) => (
          <CardItem 
          menu={menu} 
          setMenu = {setMenu}
          productDetails={productDetails} 
          index={index} 
          key={productDetails.id}  
          cartItems= {cartItems}
          setCartItems={setCartItems} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
