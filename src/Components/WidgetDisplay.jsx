import React, { useState } from 'react'
import WidgetItem from './WidgetItem'
import widgetsData from '../data'

const WidgetDisplay = ({name, text, index, formData, setFormData, id, update, display}) => {
  const [addWidget, setAddWidget] = useState(false);

  const handleData = (event)=>{
    const {name, value} = event.target;
    setFormData((prev)=> ({...prev, id, [name]: value}));
  }

  const handleForm = (event)=>{
    event.preventDefault();
    addNewWidget();
  }

  const addNewWidget = ()=>{
    let obj = widgetsData.find((item)=> item.id === formData.id);
    const newArr = obj.widgets;
    const index = newArr.length - 1;
    newArr.splice(index, 0, {name:formData.name, text: formData.text});
    update(widgetsData);
    console.log(widgetsData)
  }

  return (
    <WidgetItem name={name} text={text} index={index} setAddWidget={setAddWidget}
    handleData={handleData} handleForm={handleForm} formData={formData} addWidget={addWidget} display={display}/>
  )
}

export default WidgetDisplay