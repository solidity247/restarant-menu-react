import SearchMenu from "./SearchMenu";
import CardItem from "./CardItem";
import "./MenuPage.css"

function MenuPage({ menu, setMenu }) {
  return (
    <div className="menu-page"> 
      
      <SearchMenu menu = {menu} setMenu={setMenu}/>
      <div>
        {menu.map((productDetails) => (
          <CardItem productDetails={productDetails} key={productDetails.id} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
