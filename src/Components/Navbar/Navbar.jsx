import './Navbar.css'
import { MenuOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import {Link as Link1}  from 'react-router-dom';
// import {Data} from '../MenuItems/MenuItems'
import {DiSqllite} from 'react-icons/di'
import * as Scroll from 'react-scroll';

const Navbar = () => {
    const [open, setOpen]=useState(false)

    const showMenu = () =>{
        setOpen(!open)
    }

    // Header prevents click on small screens

    const [Button, setButton]=useState(false);

    const showButtons = () =>{
        if (window.innerWidth<=960){
            setButton(true)
        }else{
            setButton(false)
          

        }  
    }

  

     function scrollTo(link) {
        scroll.scrollTo(link);
      }

      var Scroll = require('react-scroll');
      var scroll = Scroll.animateScroll;

    window.addEventListener('resize', showButtons)

  
    return (
    <div className='header'>


        <nav className='navbar' >
            <div className="logo" sx={{ mr: 2, display: { xs: 'none', sm: 'flex' } }}>
                
                <Link to='Section' offset={50} className='NavbarLogoLink'>
                     <h2> <DiSqllite size="2rem"/> AAC portfolio </h2>
                </Link>
            </div>

            <ul className='ul-items'>
              {!Button &&<>
                {/* <li>
                    <Link to='/' spy={true} smooth={true} offset={50} duration={500} onClick={showMenu}>SomeLink</Link>
                </li> */}
                
                <li>
                    <Link to='TechStack' spy={true} smooth={true} offset={50} duration={500}> Home</Link>
                </li>

                <li>
                    <Link to='Projects' spy={true} smooth={true} offset={50} duration={500}>News </Link>
                </li>

                <li>
                    <Link to='Second' spy={true} smooth={true} offset={50} duration={500}>About</Link>
                </li>

               

             

               </>
                }


                {Button && <div className="hamburger-menu">
                    <MenuOutlined className='menu' onClick={showMenu}/>
                </div>
                }

            </ul>


        </nav>
        
        {/* <nav className={open ? 'slider active' : 'slider'}>
                    <div className="closing-menu-icon">
                                <CloseIcon className='ClosingButton' onClick={showMenu} />
                    </div>
                
                        <ul className='slider-ul' onClick={showMenu}>
                            {Data.map((item, index) => {
                                return(
                                        

                                        <li key={index} className={item.className}>
                                            <Link to={item.path}  spy={true} smooth={true} offset={50} duration={500}>{item.title}</Link>
                                        </li>
                                    
                                )
                            })}
                        </ul>
                    
        </nav> */}


        </div>
  )
}

export default Navbar