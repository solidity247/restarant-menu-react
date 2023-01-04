import LoginForm from "./Access/LoginForm";

export default function CustomersAccess({menu, setAccess}) {
  // const [login, setLogin] = useState()
  //   props.onAccessChange;

  return (
    <div>
      Customers page.
      <br />
      <br />
      Here customer can see menu, sort, filter, add to cart and see other
      information about our cafe
      <br />
      {menu.map(ele=> <p>{ele.title}</p>)}
      <br />
      And much more from customer's site
      <br />
      <LoginForm onAuthorisation={setAccess}></LoginForm>
    </div>
  );
}
