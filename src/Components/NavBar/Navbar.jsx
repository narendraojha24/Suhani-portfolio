import React,{useState} from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='nabvar'>
      <img src={menu_open} alt="" className="nav-mob-open"/>
      <ul className="nav-menu">
       <img src={menu_close} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink></li>
          
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu(portfolio)}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu(contact)}>Contact</p></AnchorLink></li>    
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar