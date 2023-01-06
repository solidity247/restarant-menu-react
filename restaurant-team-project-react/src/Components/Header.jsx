import React from 'react'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import "./Header.css"


function Header({ headerTabs,activeTab, setActiveTab}) {
  return (
    <div>
        <div className='header'>
          {headerTabs.map((btn,index)=><button className={activeTab === index && "active"} onClick={()=> setActiveTab(index)}>
            {(btn.label !== "Cart")? btn.label : <LocalMallOutlinedIcon/>}
            </button>)}
        </div>
    </div>
  )
}

export default Header