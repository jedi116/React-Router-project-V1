import React ,{useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click,setClick] = useState(false) ;
    const [button,setbutton] = useState(true);

    var handleClick = () => setClick(!click);
    var closeMobileMenu = () => setClick(false);

    const showButton = ()=>{
        if (window.innerWidth <= 960){
            setbutton(false);
        }
        else{
            setbutton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize' , showButton);

    return (
        <>
            <nav className = 'navbar' >
                <div className = 'navbar-container'>
                    <Link to ='/' className = 'navbar-logo' onClick ={closeMobileMenu} >
                        YSBelay <i className="fas fa-meteor"></i>
                    </Link>
                    <div className ='menu-icon' onClick ={handleClick} >
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className ={click ? 'nav-menu active' : 'nav-menu'}  >
                        <li className = 'nav-item'>
                            <Link to ='/' className = 'nav-links' onClick ={closeMobileMenu}  >
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to ='/about' className = 'nav-links' onClick ={closeMobileMenu}  >
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to ='/skills' className = 'nav-links' onClick ={closeMobileMenu}  >
                                Skills
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to ='/contact' className = 'nav-links' onClick ={closeMobileMenu}  >
                                    Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button link ='/calculator'buttonStyle ='btn--outline' >Calculator</Button>}
                </div> 
            </nav>   
        </>
    // @ts-ignore
    );
}

export default Navbar;
