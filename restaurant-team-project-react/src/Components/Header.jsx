import React from 'react'
import "./Header.css"

function Header({ headerTabs,activeTab, setActiveTab}) {
  const setActiveBtn=(i)=>{
    setActiveTab(i)
  }
  return (
    <div>
        <div className='header'>
          {headerTabs.map((btn,index)=><button className={activeTab === index && "active"} onClick={()=> setActiveBtn(index)}>{btn.label}</button>)}
        </div>
    </div>
  )
}

export default Header