import AdminItemCard from './AdminItemCard';

export default function AdminAccess({menu, onAccessChange, onFormSubmit}) {
  
  
  return (
    <div>
      {/* Admin's page <br /> Here we can manage our web site
      <br /> */}
      {/* <AdminInterface></AdminInterface> */}
      {menu.map((item, index)=><AdminItemCard onFormSubmit={onFormSubmit} dataIndex={index} itemDetails={item}></AdminItemCard> )}
      <button onClick={onAccessChange}>Log out</button>
    </div>
  );
}


