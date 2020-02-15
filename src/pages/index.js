import React from "react";
import { Link } from "gatsby";
import Menu from "../components/menu.jsx";
import "./mystyles.scss";
import Footer from "../components/footer";

const IndexPage = () => (
  <div>
    <Menu />
    <section class='hero is-success is-fullheight'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Fullheight title</h1>
          <h2 class='subtitle'>Fullheight subtitle</h2>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default IndexPage;
