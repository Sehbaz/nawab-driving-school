import React from "react";
import { Link } from "gatsby";
import Menu from "../components/menu.jsx";
import "./mystyles.scss";
import Footer from "../components/footer";
import Card from "../components/card";

const IndexPage = () => (
  <div>
    <Menu />
    <section class='hero is-fullheight is-primary'>
      <div class='hero-body  has-text-centered'>
        <div class='container'>
          <h1 class='title'>Nawab School of Motoring</h1>
          <h2 class='subtitle'>A driving school that you can trust.</h2>
        </div>
      </div>
    </section>
    <section class='hero is-medium is-danger is-bold'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Expert Driving Lessons in Leicester</h1>
          <h2 class='subtitle'>
            Our driving school is a pupil focused school. Driving instructors
            are fully DVSA qualified and Approved Driving Instructors (ADI’s)
            and provide a professional and courteous service. Nawab Driving
            School does more than just help you pass your test. We help you to
            be well prepared for the real world of driving. Being able to deal
            with developing situations on your own and feeling confident whilst
            driving on your own.
          </h2>
        </div>
      </div>
    </section>
    <section className='hero is-large has-text-centered'>
      <div class='container hero is-fluid '>
        <div class='notification is-white'>
          <div class='columns'>
            <div class='column'></div>
            <div class='column'>
              <div class='card'>
                <div class='card-image'>
                  <figure class='image is-4by3'>
                    <img
                      src='https://bulma.io/images/placeholders/1280x960.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img
                          src='https://bulma.io/images/placeholders/96x96.png'
                          alt='Placeholder image'
                        />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>John Smith</p>
                      <p class='subtitle is-6'>@johnsmith</p>
                    </div>
                  </div>

                  <div class='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class='column'>
              <div class='card'>
                <div class='card-image'>
                  <figure class='image is-4by3'>
                    <img
                      src='https://bulma.io/images/placeholders/1280x960.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img
                          src='https://bulma.io/images/placeholders/96x96.png'
                          alt='Placeholder image'
                        />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>John Smith</p>
                      <p class='subtitle is-6'>@johnsmith</p>
                    </div>
                  </div>

                  <div class='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>

            <div class='column'></div>
          </div>
        </div>
      </div>
    </section>
    <section class='hero is-warning'>
      <div class='hero-body'>
        <div class='container'>
          <h1 class='title'>Start Learning to Drive Today</h1>
          <h2 class='subtitle'>
            Give us a call to schedule your first driving lesson
          </h2>
        </div>
      </div>
    </section>
    <section className='hero is-large has-text-centered'>
      <div class='container hero is-fluid '>
        <div class='notification is-white'>
          <div class='columns'>
            <div class='column'></div>
            <div class='column'>
              <div class='card'>
                <div class='card-image'>
                  <figure class='image is-4by3'>
                    <img
                      src='https://bulma.io/images/placeholders/1280x960.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img
                          src='https://bulma.io/images/placeholders/96x96.png'
                          alt='Placeholder image'
                        />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>John Smith</p>
                      <p class='subtitle is-6'>@johnsmith</p>
                    </div>
                  </div>

                  <div class='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class='column'>
              <div class='card'>
                <div class='card-image'>
                  <figure class='image is-4by3'>
                    <img
                      src='https://bulma.io/images/placeholders/1280x960.png'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div class='card-content'>
                  <div class='media'>
                    <div class='media-left'>
                      <figure class='image is-48x48'>
                        <img
                          src='https://bulma.io/images/placeholders/96x96.png'
                          alt='Placeholder image'
                        />
                      </figure>
                    </div>
                    <div class='media-content'>
                      <p class='title is-4'>John Smith</p>
                      <p class='subtitle is-6'>@johnsmith</p>
                    </div>
                  </div>

                  <div class='content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href='#'>#css</a> <a href='#'>#responsive</a>
                    <br />
                    <time datetime='2016-1-1'>11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>

            <div class='column'></div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default IndexPage;
