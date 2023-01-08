import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"

// function filterMenu(menuArray, searchWord){
//   return menuArray.filter(item=>item.title.toLowerCase().includes(searchWord.toLowerCase()))

// }

function MenuPage({ menu, setMenu, setCartItems}) {

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
          setCartItems={setCartItems} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
