import React, {useState} from 'react'
import Navbar from './Navbar.jsx'
import Body from './Body.jsx'

const Home = () => {
  const [widgetArr, setWidgetArr] = useState([]);
  const [widgetObj, setWidgetObj] = useState({});
  const [searchInput, setSearchInput] = useState('');


  return (
    <div>
        <Navbar searchInput={searchInput} setSearchInput={setSearchInput} setWidgetArr={setWidgetArr} setWidgetObj={setWidgetObj}/>
        <Body widgetArr={widgetArr} widgetObj={widgetObj}/>
    </div>
  )
}

export default Home