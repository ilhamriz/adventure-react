import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

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
      ],
      activeMenu: 0
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

  handleActiveMenu = (id) => {
    this.setState({
      activeMenu: id,
      click: false
    })
  }

  render() {
    const { click, menu, activeMenu } = this.state;

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
                    <Link to={val.to} className={index === activeMenu ? 'nav-links active' : 'nav-links'} onClick={()=>this.handleActiveMenu(index)}>
                      {val.name}
                    </Link>
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
