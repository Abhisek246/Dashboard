import React from 'react'
import widgetsData from '../data';

const Navbar = ({searchInput, setSearchInput, setWidgetArr, setWidgetObj}) => {

  const handleChange = (event) => {
    const searched = event.target.value;
    setSearchInput(searched);
    setWidgetArr({});
    setWidgetObj({});

  };


  const handleSubmit=(event)=>{
    event.preventDefault();
    setSearchInput('');

    
    widgetsData.forEach((widget) => {
      if (widget.name === searchInput) {
        setWidgetArr({...widget});
      } else {
        widget.widgets.forEach((obj) => {
          if (obj.name === searchInput && obj.name.length > 0) {
            setWidgetObj({ ...obj });
          }
        });
      }
    });
  }

  return (
  <nav className="navbar navbar-expand-lg bg-body-light">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard V2</a>
          </li>
        </ul>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input className="form-control me-2 bg-body-tertiary" type="search" placeholder="Search anything..." aria-label="Search" onChange={handleChange}/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar





// // Log updated states using useEffect
// useEffect(() => {
//   console.log('widgetArr updated:', widgetArr);
// }, [widgetArr]);