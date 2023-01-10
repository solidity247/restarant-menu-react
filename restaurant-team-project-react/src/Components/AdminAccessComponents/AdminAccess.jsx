import AdminItemCard from './AdminItemCard';
import AddNewItem from './AddNewItem';
import "./AdminAccess.css"
import DarkModeSwitch from '../DarkModeSwitch';

export default function AdminAccess({menu, onAccessChange, onFormSubmit, deleteElementFromData, darkMode, setDarkMode}) {
  
  
  return (
    <div className='admin-page-container'>
      <img src="https://i0.wp.com/chieffoodofficers.com/wp-content/uploads/2017/10/cooking-header.jpg?fit=2000%2C500&ssl=1" alt="admin-header" />
      <div className={darkMode? "dark-mode-admin-page" : "admin-page-body"}>
        <div className='btns-wrapper'> 
          <h3>Welcome, Admin</h3>
          <button className = "btn-logout" onClick={onAccessChange}>Log out</button>
          <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <AddNewItem onFormSubmit={onFormSubmit} />
        {menu.map((item, index)=><AdminItemCard onFormSubmit={onFormSubmit} dataIndex={index} itemDetails={item} deleteElementFromData={deleteElementFromData} ></AdminItemCard> )}
        <button className = "btn-logout" onClick={onAccessChange}>Log out</button>
      </div>

    </div>
  );
}


