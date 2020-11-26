import React, { Component } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      menu: [
        {
          name: 'Home',
          to: '/'
        },
        {
          name: 'Destination',
          to: '/destination'
        },
        {
          name: 'Gallery',
          to: '/gallery'
        },
        {
          name: 'Contact',
          to: '/contact'
        }
      ]
    }
  }

  handleMenuIcon = () => {
    this.setState({
      click : !this.state.click
    })
  }

  closeMenu = () => {
    this.setState({
      click : false
    })
  }

  render() {
    const { click, menu } = this.state;

    return (
      <>
        <nav className='navbar'>
          <div className="navbar-container">
            <Link to='/' className='navbar-logo' onClick={() => this.closeMenu()}>
              Adventure.
            </Link>
            <div className="menu-icon" onClick={() => this.handleMenuIcon()}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
              {menu.map((val, index) => {
                return (
                  <li key={index} className="nav-item">
                    <NavLink exact to={val.to} className='nav-links' onClick={()=>this.closeMenu()}>
                      {val.name}
                    </NavLink>
                  </li>           
                )
              })}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
