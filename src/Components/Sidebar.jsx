import React from 'react'
import './Sidebar.css'
import widgetsData from '../data'

const Sidebar = ({update, updatedArray, setActive, sidebar, setSidebar, active, setDisplay}) => {

    const removeWidget = (event)=>{
        let id = event.currentTarget.id;
        let index =  updatedArray.findIndex((item)=> item.name === id );
        updatedArray.splice(index, 1);
        update(widgetsData);
    }

  return (
    <>
    {sidebar && 
        <div className='sidebar'>
          <div className='sidebar-top'><span>Add Widget</span><i onClick={()=>{setSidebar(false), setDisplay(false)}} class="fa-solid fa-xmark"></i></div>
          <div>
            <p className='sidebar-mess'>Personalise your dashboard by adding the following widget</p>
            <ul className='allLinks'>
              <li onClick={()=>setActive("CSPM Executive Dashboard")} className={active === "CSPM Executive Dashboard" ? "activeLink" : "link"}>CSPM</li>
              <li onClick={()=>setActive("CWPP Dashboard")} className={active === "CWPP Dashboard" ? "activeLink" : "link"}>CWPP</li>
              <li onClick={()=>setActive("Registry Scan")} className={active === "Registry Scan" ? "activeLink" : "link"}>Image</li>
            </ul>
            {updatedArray.map((item)=>{ 
              if(item.name && item.text){
                return (
                  <div className="form-check link-div" >
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked  onClick={removeWidget}/>
                    <label className="form-check-label" for="flexCheckChecked" id={item.name} onClick={removeWidget}>{item.name}</label>             
                  </div>
                )
              }
            })}
          </div>
        </div>
    }
    </>
  )
}

export default Sidebar