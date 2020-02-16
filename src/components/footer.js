import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../pages/mystyles.scss";
const Footer = () => {
  return (
    <footer class='footer'>
      <div class='content has-text-centered'>
        <p>Copyright © Nawab Driving School 2020, All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
