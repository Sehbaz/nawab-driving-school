/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../pages/mystyles.scss";
import Menu from "./menu";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div style={{}}>
        <Menu />

        <footer class='footer'>
          <div class='content has-text-centered'>
            <p>
              <strong>Bulma</strong> by{" "}
              <a href='https://jgthms.com'>Jeremy Thomas</a>. The source code is
              licensed
              <a href='http://opensource.org/licenses/mit-license.php'>MIT</a>.
              The website content is licensed{" "}
              <a href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
                CC BY NC SA 4.0
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
