// * Injected in Footer *

import React from 'react'
import { Link } from 'gatsby'

// import MenuStyles from './menu.module.scss'

const Menu = () => {
  return (
    <div>
      <ul className="list-unstyled">
        <h4>Menu</h4>
        <li>
          <Link to="/" style={{ color: '#333' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contentful-blog" style={{ color: '#333' }}>
            Blog
          </Link>
        </li>
        <li>
          <Link to="/designs" style={{ color: '#333' }}>
            Designs
          </Link>
        </li>
        <li>
          <Link to="/projects" style={{ color: '#333' }}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/pricing" style={{ color: '#333' }}>
            Pricing
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
