import React, { Component } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      scroll: false,
      menu: [
        {
          name: 'Home',
          to: '/adventure-react'
        },
        {
          name: 'Destination',
          to: '/adventure-react/destination'
        },
        {
          name: 'Gallery',
          to: '/adventure-react/gallery'
        },
        {
          name: 'Contact',
          to: '/adventure-react/contact'
        }
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollLength = document.documentElement.scrollTop;
    if (scrollLength > 0) {
      this.setState({
        scroll: true
      })
    }
    else {
      this.setState({
        scroll: false
      })
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
    const { click, menu, scroll } = this.state;

    return (
      <>
        <nav className={scroll ? 'navbar scroll' : 'navbar'}>
          <div className="navbar-container">
            <Link to='/adventure-react' className='navbar-logo' onClick={() => this.closeMenu()}>
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
