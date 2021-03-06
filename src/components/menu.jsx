import React from "react";
import { Link } from "gatsby";
import mainicon from "../images/driving-pass.png";
import TestRoute from "../pages/testroute";
import Show from "../pages/show";

const Menu = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className='navbar is-white is-size-6'
        role='navigation'
        aria-label='main-navigation'
      >
        <div className='container'>
          <div className='navbar-brand '>
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={mainicon}></img>
              <Link className='navbar-item' to='/'>
                <p>Nawab</p>
              </Link>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id='navMenu'
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className='navbar-start has-text-centered '></div>
            <div className='navbar-end has-text-centered '>
              <Link className='navbar-item' to='/'>
                Home
              </Link>
              <Link className='navbar-item' to='/show'>
                Show/Tell
              </Link>
              <Link className='navbar-item' to='/testroute'>
                Routes
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Menu;
