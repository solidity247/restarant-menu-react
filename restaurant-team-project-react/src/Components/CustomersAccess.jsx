import LoginForm from "./Access/LoginForm";

export default function CustomersAccess(props) {
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
      <br />
      And much more from customer's site
      <br />
      <LoginForm onAuthorisation={props.onAccessChange}></LoginForm>
    </div>
  );
}
