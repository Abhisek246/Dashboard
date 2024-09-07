import React from 'react'
import './WidgetItem.css'

const WidgetItem = ({name, text, index, setAddWidget, addWidget, handleData, handleForm, formData, display}) => {
  return (
    <div key={index} className={display ? 'newDisplay' :'widgetDisplay'}>
      {name && text ? 
      <div>
      <h4>{name}</h4>
      <p>{text}</p>
      </div> : !addWidget &&
      <button onClick={()=>setAddWidget(true)} type="button" className="btn btn-outline-dark add"><i className="fa-solid fa-plus"></i> Add Widget</button>
      }
      {addWidget && 
      <form className='addWidgetForm'>
        <input type="text" placeholder='add widget name' name='name' value={formData.name} onChange={handleData}/>
        <textarea rows={5} type="text" placeholder='add widget text' name='text' value={formData.text} onChange={handleData}/>
        <button onClick={()=>{setAddWidget(false); handleForm(event)}} type="button" className="btn btn-success addWidget">Add Widget</button>
      </form>
      }
    </div>
  )
}

export default WidgetItem