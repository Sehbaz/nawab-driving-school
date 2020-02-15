import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Menu=()=>{
    return(
      <nav class="navbar is-light" role="navigation" aria-label="main navigation">
       <div class="navbar-brand">
       <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>
    <a role="button" class="navbar-burger burger  " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
       </div>
       <div id="navbarBasicExample" class="navbar-menu">
       <div class="navbar-start"><a class="navbar-item">
       <Link to="/">Home</Link>
      </a>

      
      <a class="navbar-item">
       <Link to="/services">Show/Tell</Link>
      </a>
      <a class="navbar-item">
       <Link to="/services">Routes</Link>
      </a>
    

      </div>
       </div>
       
      </nav>
    )
}

export default Menu