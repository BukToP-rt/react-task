import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const Navigate = useNavigate();
    return (<>
        <header>
        <div className="container-header">
          <div className="nav-header">
            <span  onClick = {() => Navigate("/famous")}>Популярное</span>
            <span  onClick = {() => Navigate("/")}>Случайные цитаты</span>
            <span  onClick = {() => Navigate("/technology")}>Технологии</span>
            <span onClick={() => Navigate("/favorites")}>Понравившиеся </span>
            </div>     
        </div>
        
        
      </header>
      <div className="panel">
        <a className="logo" href="/">
          Qoutes <br />
          great man
        </a>
      </div>
      </>
      
    );
};

export default Header