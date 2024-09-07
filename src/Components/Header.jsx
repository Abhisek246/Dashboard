import React, {useEffect, useState} from 'react'
import './Header.css'
import Sidebar from './Sidebar';

const Header = ({updatedData, update, setDisplay}) => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState("CSPM Executive Dashboard");
  const [updatedArray, setUpdatedArray] = useState([]);

  useEffect(()=>{
    const updatedLinks = ()=>{
      let obj = updatedData.find((item)=> item.name === active);
      setUpdatedArray(obj.widgets);
    };
    updatedLinks();
  });

  return (
    <>
    <Sidebar update={update} updatedArray={updatedArray} active={active} setActive={setActive} sidebar={sidebar}
     setSidebar={setSidebar} setDisplay={setDisplay}/>
    
    <div className='header'>
      <div className='header-name'>CNAPP Dasboard</div>
      <div>
      <button onClick={()=>{setSidebar(true), setDisplay(true)}} type="button" className="btn btn-outline-dark">Add Widget <i className="fa-solid fa-plus"></i></button>
      <button type="button" className="btn btn-outline-dark"><i className="fa-solid fa-arrows-rotate"></i></button>
      <button type="button" className="btn btn-outline-dark"><i className="fa-solid fa-ellipsis-vertical"></i></button>
      <button type="button" className="btn btn-outline-dark"><i className="fa-solid fa-clock"></i> Last 2 days</button>
      </div>
    </div>
    </>
  )
}

export default Header