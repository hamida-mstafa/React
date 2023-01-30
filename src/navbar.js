import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
     <>
       <nav className='navbar'>
          
          <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li>
                <Link to="/names">
                    Names
                </Link>
                </li>
                <li>
                <Link to="/names">
                    About
                </Link>
                </li>
                
            </ul>
            <Link to="/">
                <div>
                  <h3>Name<span>It</span></h3>
                </div>
            </Link>
          </div>
      </nav>
     </>

    )

}

export default Navigation;
// /* 
//           </div>
//           <div>
            
//             <Link>
//                 About
// //             </Link>
          