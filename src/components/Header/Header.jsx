import "./Header.scss";
import React from "react";
import { Navigate, NavLink } from "react-router-dom";

export function Header() {
   let activeClassName = "active-link";
   return (
      <div className="Header">
         <h2>Header</h2>

         <nav>
            <ul>
               <li>
                  <NavLink
                     to="/character"
                     className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                     }
                  >
                     Characters
                  </NavLink>
                  <NavLink
                     to="/about"
                     className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                     }
                  >
                     About
                  </NavLink>
               </li>
            </ul>
         </nav>
      </div>
   );
}
