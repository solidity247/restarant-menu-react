export default function AdminAccess(props) {
  return (
    <div>
      Admin's page <br /> Here we can manage our web site
      <br />
      <button onClick={props.onAccessChange}>Log out</button>
    </div>
  );
}
