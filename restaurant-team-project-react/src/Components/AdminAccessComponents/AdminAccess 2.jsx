import AdminItemCard from './AdminItemCard';
import AddNewItem from './AddNewItem';

export default function AdminAccess({menu, onAccessChange, onFormSubmit, deleteElementFromData}) {
  
  
  return (
    <div>
      {/* Admin's page <br /> Here we can manage our web site
      <br /> */}
      {/* <AdminInterface></AdminInterface> */}
      <AddNewItem onFormSubmit={onFormSubmit} />
      {menu.map((item, index)=><AdminItemCard onFormSubmit={onFormSubmit} dataIndex={index} itemDetails={item} deleteElementFromData={deleteElementFromData} ></AdminItemCard> )}
      <button onClick={onAccessChange}>Log out</button>
    </div>
  );
}


