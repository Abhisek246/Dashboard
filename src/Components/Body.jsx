import React, { useState } from 'react'
import Header from './Header'
import WidgetDisplay from './WidgetDisplay'
import './Body.css'
import widgetsData from '../data'

const Body = ({widgetArr, widgetObj}) => {
  const [formData, setFormData] = useState({id: "", name: "", text: ""});
  const [updatedData, setUpdatedData] = useState(widgetsData);
  const [display, setDisplay] = useState(false);

  const update = (data)=>{
    setUpdatedData([...data]);
    setFormData({
      id: "",
      name: "",
      text: ""
    })
  }


  return (
    <div className={display ? "addBg" : "body"}>
        <Header updatedData={updatedData} update={update} setDisplay={setDisplay}/>
        {widgetArr.name ? 
        <div key={widgetArr.id} style={{marginTop: "1rem"}}>
            <h3>{widgetArr.name}</h3>
            <div className='widget'>
              {widgetArr.widgets.map((obj, index)=> obj.name && (
                <div className='widgetDisplay' key={index}>
                  <h4>{obj.name}</h4>
                  <p>{obj.text}</p>
                </div>
              ))}
            </div>
        </div> : 
        <>
        {widgetObj.name ? 
          <div className='widgetDisplay'>
            <h4>{widgetObj.name}</h4>
            <p>{widgetObj.text}</p>
          </div> :
          <>
         {updatedData.map((item)=>(
          <div key={item.id} style={{marginTop: "1rem"}}>
            <h3>{item.name}</h3>
            <div className='widget'>
              {item.widgets.map((obj, index)=>(
                  <div><WidgetDisplay name={obj.name} text={obj.text} index={index} formData={formData}
                  setFormData={setFormData} id={item.id} update={update} display={display}/></div>
              ))}
            </div>
          </div>
        ))}
        </>
        }
        </>
       }
       
    </div>
    
  )
}

export default Body