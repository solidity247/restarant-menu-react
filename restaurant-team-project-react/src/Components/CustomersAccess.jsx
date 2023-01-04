import LoginForm from "./Access/LoginForm";
import MenuPage from "./MenuPage"




export default function CustomersAccess({ menu, setAccess}) {
  // TODOS:
  // const [login, setLogin] = useState()
  // props.onAccessChange;
  // navbar (sidebar)|| header
  // conditional component for home 
  // conditional component menu 
  // conditional component about us (visit us)
  // component Cart
  // footer  



  return (
    <div>
      Customers page.
      <br />
      <br />
      <br />
      Here customer can see menu, sort, filter, add to cart and see other
      information about our cafe
      <br />
      <MenuPage menu = {menu}/>
      <br />
      And much more from customer's site
      <br />
      <LoginForm onAuthorisation={setAccess}></LoginForm>
    </div>
  );
}
