import React from "react";
import Menu from "../components/menu.jsx";
import "./mystyles.scss";
import Footer from "../components/footer";

const Show = () => (
  <div>
    <Menu />
    <section class='hero is-primary is-fullheight'>
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

export default Show;
