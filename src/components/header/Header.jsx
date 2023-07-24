import './header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <nav className="header">
            <div className="left">
                <h2>Brand</h2>
            </div>

            <div className="right">
                <ul>
                    <li>
                        <NavLink to='/'>home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/about'>about</NavLink>
                    </li>

                    <li>
                        <NavLink to='/services'>services</NavLink>
                    </li>

                    <li>
                        <NavLink to='/cart'>cart</NavLink>
                    </li>

                    <li>
                        <NavLink to='/login'>login</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
      
    </>
  )
}

export default Header
