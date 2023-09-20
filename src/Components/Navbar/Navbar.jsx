import {React,useState} from 'react'
import './Navbar.css'
import { images } from '../../constants'
import { Link } from 'react-scroll'

const Navbar = () => {
    const[toggleMenu,setToggleMenu]=useState(false);
    const[isclicked,setIsClicked]=useState(false);
    const toggledMenu = ()=>{
      setToggleMenu((prevstate)=>!prevstate)
    }
    const SearchClicked =()=>{
        setIsClicked((prevstate)=>!prevstate)
    }
    const mobile = window.innerWidth < 650? true:false
  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <h3>SpecialFlowers</h3>
      </div>
        { (toggleMenu  || mobile===false) && (<ul className='navbar-links'>
        <li className='list'  ><Link to='home'>Home</Link></li>
        <li className='list'>Flowers</li>
        <li className='list'>Plants</li>
        <li className='list'>Offers</li>
        <li className='list'>Blogs</li>
        <li className='list'>Contact us</li>   
      </ul>)}
      <img  className="img-menu"  src={images.menu} alt='menu' onClick={toggledMenu}/>
      <div className='navbar-search'>
        {isclicked?<input type='text'placeholder='Search'/>: ''} 
        <img src={images.Search} alt='search' onClick={SearchClicked}/>
      </div>
    </div>
  )
}

export default Navbar
