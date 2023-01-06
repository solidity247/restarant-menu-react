import { useState } from "preact/hooks";
import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"

// function filterMenu(menuArray, searchWord){
//   return menuArray.filter(item=>item.title.toLowerCase().includes(searchWord.toLowerCase()))

// }

function MenuPage({ menu, setMenu, cartItems}) {

  // const [searchParam, setSearchParam] = useState("")

  // const menuToRender = filterMenu(menu, searchParam)

  return (
    <div className="menu-page"> 
      
      <SearchMenu menu = {menu} setMenu = {setMenu}/>
      <div>
        {menu.map((productDetails, index) => (
          <CardItem 
          menu={menu} 
          productDetails={productDetails} 
          index={index} 
          key={productDetails.id}  
          cartItems={cartItems} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
