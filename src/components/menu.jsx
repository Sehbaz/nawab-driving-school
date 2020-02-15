import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const Menu=()=>{
    // Dropdowns in navbar

    var $dropdowns = getAll('.navbar-item.has-dropdown:not(.is-hoverable)');

    if ($dropdowns.length > 0) {
      $dropdowns.forEach(function ($el) {
        $el.addEventListener('click', function (event) {
          event.stopPropagation();
          $el.classList.toggle('is-active');
        });
      });
  
      document.addEventListener('click', function (event) {
        closeDropdowns();
      });
    }
  
    function closeDropdowns() {
      $dropdowns.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }
  
    // Close dropdowns if ESC pressed
    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeDropdowns();
      }
    });
  
    // Toggles
  
    var $burgers = getAll('.burger');
  
    if ($burgers.length > 0) {
      $burgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  
    // Functions
  
    function getAll(selector) {
      return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }
    return( 
      
      <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
         
        </div>
    
    
      </div>
    </nav>
    )
}

export default Menu