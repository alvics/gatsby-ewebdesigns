import React from 'react'
import { Link } from 'gatsby'

import MenuStyles from './menu.module.scss'

const Menu = () => {
  return (
    <div>
      <ul className="list-unstyled">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contentful-blog">Blog</Link>
        </li>
        <li>
          <Link to="/designs">Designs</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
